import 'isomorphic-fetch'
import './polyfills'
import {
  isEmptyArray,
  isEmptyObject,
  isEmptyString,
  isString,
  isObject,
  isArray,
  isNil,
} from '../js/emptyCheck'
import {
  IFetchOptions,
  IUnknownDataProps,
  IFetchOnDemandOptions,
} from './typings'

const fromDotPathToPieces = (key = '') => {
  return key
    .split(/\./g)
    .map(keyItem => keyItem.replace(/\[|\]/g, ''))
    .filter(Boolean)
}

const getValue = (
  obj: Record<string, unknown>,
  key: string,
  fallback = Symbol.for('@@EMPTY')
) => {
  const pathList = fromDotPathToPieces(key)
  let curKey = pathList.shift()
  let result: any = obj
  while (curKey) {
    if (curKey === 'n') {
      if (isArray(result) === false) {
        console.warn('must be an array at n')
        return fallback
      }
      const restOfThePathList = pathList.join('.')
      const transformItem = (item: any) => getValue(item, restOfThePathList)
      return result.map(transformItem)
    }
    result = result[curKey]
    if (result == null) {
      return result
    }
    curKey = pathList.shift()
  }

  return result
}

const getTransformModelResponse = (response: any, transformModel: any) => {
  if (isEmptyObject(transformModel) === true) {
    return response
  }
  const transformedResponse: any = {}
  Object.keys(transformModel).forEach((key: string) => {
    const pathForKey = transformModel[key]
    transformedResponse[key] = getValue(response, pathForKey)
  })

  return transformedResponse
}

const getQueryParamAsObjectFromUrl = (url: string) => {
  try {
    const urlObj = new URL(url)
    if (urlObj !== undefined) {
      const searchParams = urlObj.searchParams
      return Object.fromEntries(searchParams)
    }
  } catch (e) {
    console.error('Caught Error: getQueryParamAsObjectFromUrl', e)
  }

  return {}
}

const constructQueryString = (queryObject: Record<string, unknown>) => {
  try {
    if (isEmptyObject(queryObject) === false) {
      const params = new URLSearchParams()
      for (const queryItem of Object.entries(queryObject)) {
        const [key, value]: [string, any] = queryItem
        !isNil(value) && params.append(key, value)
      }
      return params.toString()
    }
    return ''
  } catch (e) {
    console.error('Caught Error: constructQueryString', e)
  }
}

const makeURL = (
  url: string,
  newPathParams: any = [],
  newQueryParams: IUnknownDataProps = {},
  appendQueryParams = true
) => {
  if (url === '') {
    console.warn('Error in makeURL: The url should not be empty!')
    return ''
  }
  let actualURL = url
  if (isEmptyArray(newPathParams) === false) {
    newPathParams.forEach((item: any) => {
      const { key = '', value = '' } = item
      actualURL = actualURL.replace(key, value)
    })
  }
  const existingQP = getQueryParamAsObjectFromUrl(url)
  let queryParams = existingQP
  if (isEmptyObject(newQueryParams) === false) {
    queryParams =
      appendQueryParams === true
        ? { ...existingQP, ...newQueryParams }
        : newQueryParams
  }
  actualURL = actualURL.split('?')[0]
  const queryString: any = constructQueryString(queryParams)
  const querySeparator = isEmptyString(queryString) === false ? '?' : ''

  return `${actualURL}${querySeparator}${queryString}`
}

const makeFetch = async (
  url: string,
  options: IFetchOptions = {},
  dataTransformModel: IUnknownDataProps = {}
) => {
  try {
    const fetchStatus = async (response: IUnknownDataProps) => {
      // console.log({ response })
      if (response?.status === 204) {
        return { status: 204 }
      } else if (response?.status === 504) {
        return { status: 504 }
      } else if (response?.status === 502) {
        return { status: 502, message: 'Invalid Response' }
      }
      const data = (await response.json()) || {}
      data.status = data.status !== undefined ? data.status : response?.status
      if (!response.ok) {
        return Promise.reject(data)
      } else {
        const headers = await response.headers
        if (data?.headers) {
          data.headers = headers
        }
      }
      return data
    }

    const fetchResponse = await fetch(url, options).then(fetchStatus)

    if (
      isEmptyObject(dataTransformModel) === false &&
      fetchResponse.error !== 'failed'
    ) {
      return await getTransformModelResponse(fetchResponse, dataTransformModel)
    } else {
      return fetchResponse
    }
  } catch (e: any) {
    console.error('Caught Error at makeFetch:', e)
    return {
      error: 'failed',
      status: e?.status || e?.responseCode,
      responseCode: e?.responseCode || '',
      message:
        e?.message ||
        e?.responseMessage ||
        e?.error?.[0]?.errormessage ||
        e?.validationErrors?.globalErrors?.[0]?.message,
    }
  }
}

const mergePostBody = (
  defaultPostBody: IUnknownDataProps | string = {},
  newPostBody: IUnknownDataProps | string = {}
) => {
  let returnData = {}
  if (isArray(newPostBody)) {
    returnData = newPostBody
  } else {
    returnData = { ...defaultPostBody, ...newPostBody }
  }

  return returnData
}

const mergeOptions = (
  defaultOptions: IFetchOnDemandOptions = {},
  newOptions: IFetchOnDemandOptions = {}
) => {
  const {
    pathParams = [],
    queryParams = {},
    formDataFlag = true,
    body: newPostBody,
    headers = {},
    ...restOptions
  } = newOptions

  return {
    pathParams: [...(defaultOptions?.pathParams || []), ...pathParams],
    queryParams: {
      ...defaultOptions?.queryParams,
      ...queryParams,
    },
    body: formDataFlag
      ? mergePostBody(defaultOptions?.body, newPostBody)
      : newPostBody,
    headers: {
      ...defaultOptions?.headers,
      ...headers,
    },
    method: defaultOptions?.method,
    ...restOptions,
  }
}

const fetchAPI = async (
  url: string,
  options: IFetchOptions,
  transformModel: IUnknownDataProps = {}
) => {
  const {
    method,
    mode = undefined,
    pathParams = [],
    queryParams = {},
    body,
    headers = {},
    appendQueryParams = false,
    postBodyAsString = false,
  } = options

  const actualURL = makeURL(url, pathParams, queryParams, appendQueryParams)
  const fetchOptions: IFetchOptions = {}
  fetchOptions.method = method

  if (mode !== undefined && mode !== 'none') {
    fetchOptions.mode = mode
  }

  if (isEmptyObject(headers) === false) {
    fetchOptions.headers = new Headers(headers)
  }

  if (isObject(body) === true && isEmptyObject(body) === false) {
    fetchOptions.body = postBodyAsString === true ? JSON.stringify(body) : body
  } else if (isString(body) === true && isEmptyString(body) === false) {
    fetchOptions.body = postBodyAsString === true ? body : JSON.parse(body)
  } else if (typeof FormData !== 'undefined' && body instanceof FormData) {
    fetchOptions.body = body
  } else if (isArray(body) === true && isEmptyArray(body) === false) {
    fetchOptions.body = postBodyAsString === true ? JSON.stringify(body) : body
  }

  fetchOptions.credentials = 'same-origin'

  if (actualURL) {
    return makeFetch(actualURL, fetchOptions, transformModel)
  } else {
    console.warn('Error in fetchAPI: The url should not be empty!')
    return ''
  }
}

const fetchJSON = async (
  json: string & Record<string, unknown>,
  transformModel: IUnknownDataProps
) => {
  let data: any = json
  if (isString(json) === true) {
    data = JSON.parse(json)
  }
  return getTransformModelResponse(data, transformModel)
}

const fetchFile = async (
  fileUrl: string,
  transformModel: IUnknownDataProps
) => {
  let value = {}
  if (fileUrl === '') {
    console.warn('file url should not be empty!')
  } else {
    value = await makeFetch(fileUrl, { method: 'GET' }, transformModel)
  }
  return value
}

export {
  makeURL,
  makeFetch,
  getQueryParamAsObjectFromUrl,
  getTransformModelResponse,
  constructQueryString,
  mergeOptions,
  mergePostBody,
  getValue,
  fetchAPI,
  fetchJSON,
  fetchFile,
}
