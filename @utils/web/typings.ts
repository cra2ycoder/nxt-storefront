export type TAPIMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type TAPIContentType =
  | 'text/plain'
  | 'application/json'
  | 'image/jpeg'
  | 'text/xml'
  | 'application/x-www-form-urlencoded'

export interface TURLRequestHeaders {
  'Content-Type'?: TAPIContentType
  'Content-Length'?: string
  'X-Custom-Header'?: string
  Accept?: TAPIContentType
  Authorization?: string
  'x-collection-id'?: string
  'x-api-key'?: string
  'x-auth-token'?: string
  Origin?: string
  [key: string]: any
}

export type TAPIMode = 'cors' | 'no-cors' | 'same-origin' | 'none' | undefined

export type TAPICache =
  | 'default'
  | 'no-cache'
  | 'reload'
  | 'force-cache'
  | 'only-if-cached'

export type TCredentials = 'same-origin' | 'omit' | 'include'
export type TRedirect = 'manual' | 'follow' | 'error'

export type TReferrerPolicy =
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url'

export interface IUnknownDataProps {
  [key: string]: any
}

export interface IPathParamItem {
  key: string
  value: string
}

export type TPathParamList = IPathParamItem[]

export interface IFetchOnDemandOptions {
  body?: IUnknownDataProps | string
  headers?: TURLRequestHeaders
  queryParams?: IUnknownDataProps
  pathParams?: TPathParamList
  postBodyAsString?: boolean
  appendQueryParams?: boolean
  formDataFlag?: boolean
}

export interface IFetchOptions extends IFetchOnDemandOptions {
  method?: TAPIMethod
  mode?: TAPIMode
  cache?: TAPICache
  credentials?: TCredentials
  redirect?: TRedirect
  referrerPolicy?: TReferrerPolicy
}
