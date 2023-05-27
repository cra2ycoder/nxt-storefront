import { useMemo, useState } from 'react'
import { makeFetch, IFetchOptions } from '@utils/web'
import { IUseFetchProps, TAPIStatus } from './typings'

/**
 * @todo
 * !!! AbortController - if api takes more than 5 secs
 *
 */
function useFetch(props: IUseFetchProps) {
  const { url = '', init = true, options = {}, transformModel = {} } = props

  const [apiStatus, setAPIStatus] = useState<TAPIStatus>('init')
  const [response, setResponse] = useState<object>({})

  const fetchNow = async (
    options: IFetchOptions,
    newTransformModel = {},
    skipMerge: boolean = false
  ) => {
    setAPIStatus('fetching')
    const response = await makeFetch(
      url,
      options,
      skipMerge
        ? newTransformModel
        : { ...transformModel, ...newTransformModel }
    )

    /**
     * @todo
     * !!! response status handling should be done properly here
     */
    if (response.status === 'success') {
      setAPIStatus('success')
    } else if (response.status === 'failed') {
      setAPIStatus('failed')
    }
    setResponse(response || {})
  }

  useMemo(async () => {
    if (apiStatus === 'init' && init === true) {
      await fetchNow(options)
    }
  }, [url, options, transformModel])

  return {
    status: apiStatus,
    response,
    fetchNow,
    setResponse,
  }
}

export { useFetch }
export default useFetch
