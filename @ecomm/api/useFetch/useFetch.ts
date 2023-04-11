import { useMemo, useState } from 'react'
import { fetchNowIns } from './FetchNow'
import { IUseFetchProps } from './typings'

function useFetch(props: IUseFetchProps) {
  const { url = '', init = true, headers = {}, transformModel = {} } = props

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [response, setResponse] = useState<object>({})

  const fetchNow = fetchNowIns.callee.bind(
    fetchNowIns,
    url,
    headers,
    transformModel
  )

  useMemo(async () => {
    if (init === true) {
      setIsLoading(true)
      await fetchNow()
        .onSuccess(res => {
          setIsLoading(false)
          setResponse(res)
        })
        .onFail(err => {
          setIsLoading(false)
          setResponse({})
        })
    }
  }, [])

  return {
    isLoading,
    response,
    fetchNow,
    setResponse,
    setIsLoading,
  }
}

export { useFetch }
export default useFetch
