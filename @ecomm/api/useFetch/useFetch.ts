import { useMemo, useState } from 'react'
import FetchNow from './FetchNow'

function useFetch(props) {
  const {
    url = '',
    init = true,
    options: defaultOptions = {},
    transformModel: defaultTransformModel = {},
  } = props

  const [isLoading, setIsLoading] = useState(true)
  const [response, setResponse] = useState({})

  const fetchNowIns = new FetchNow()
  const fetchNow = fetchNowIns.callee.bind(
    fetchNowIns,
    url,
    defaultOptions,
    defaultTransformModel
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
