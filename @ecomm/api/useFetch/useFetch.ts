import { useEffect, useState } from 'react'
import Fetch from './Fetch'
import { IUseFetchProps } from './typings'

function useFetch(props: IUseFetchProps) {
  const { url = '', init = true, options = {}, transformModel = {} } = props

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [response, setResponse] = useState<object>({})

  const fetchNowIns = new Fetch(url, options, transformModel, setIsLoading)
  const fetchNow = fetchNowIns.call.bind(fetchNowIns)

  const makeCall = async () => {
    let ignore = false
    if (url && init === true) {
      setIsLoading(true)
      await fetchNow()
        .onSuccess(res => {
          if (!ignore) {
            setIsLoading(false)
            setResponse(res)
          }
        })
        .onFail(err => {
          if (!ignore) {
            setIsLoading(false)
            setResponse({})
          }
        })
    }
    return () => {
      ignore = true
    }
  }

  useEffect(() => {
    makeCall()
  }, [url, Object.keys(options).length, Object.keys(transformModel).length])

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
