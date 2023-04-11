import { useMemo, useState } from 'react'

interface IFetchNowProps {
  successCbk: (res: object) => void
  failureCbk: (err: object) => void

  onSuccess(cbk: (res: object) => void): any
  onFail(cbk: (err: object) => void): any
  callee(url: string, headers: Object, transformModel: object): any
}

class FetchNow implements IFetchNowProps {
  successCbk = (res: object) => {}
  failureCbk = (err: object) => {}

  onSuccess(cbk: any) {
    this.successCbk = cbk
    return this
  }

  onFail(cbk: any) {
    this.failureCbk = cbk
    return this
  }

  callee(url = '', headers = {}, transformModel = {}) {
    new Promise(async (x, y) => {
      await fetch(url, headers)
        .then(res => {
          if (res.status > 400 && res.status >= 400) {
            throw res
          } else {
            return res.json()
          }
        })
        .then(data => {
          if (this.successCbk) {
            this.successCbk(data || {})
          }
        })
        .catch(err => {
          if (this.failureCbk) {
            this.failureCbk(err || {})
          }
        })
    })
    return this
  }
}

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
