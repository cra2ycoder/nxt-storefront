import { makeURL } from '@utils/web'
import {
  IFetchProps,
  TFetchOptionsProps,
  TFetchTransformModelProps,
} from './typings'

class Fetch implements IFetchProps {
  url: string
  options?: TFetchOptionsProps | undefined
  transformModel?: TFetchTransformModelProps | undefined
  setIsLoading?: Function | undefined
  setResponse?: Function | undefined
  successCbk?: Function | undefined
  failureCbk?: Function | undefined

  constructor(
    url: string,
    options?: TFetchOptionsProps,
    transformModel?: TFetchTransformModelProps,
    setIsLoading?: Function,
    setResponse?: Function
  ) {
    this.url = url
    this.options = options
    this.transformModel = transformModel
    this.setIsLoading = setIsLoading || ((s: boolean) => {})
    this.setResponse = setResponse || ((res: any) => {})
  }

  onSuccess(cbk: any) {
    this.successCbk = cbk
    return this
  }

  onFail(cbk: any) {
    this.failureCbk = cbk
    return this
  }

  call(
    options: TFetchOptionsProps = {},
    transformModel: TFetchTransformModelProps = {}
  ) {
    const _self = this
    this.options = Object.keys(options).length ? options : this.options
    this.transformModel = Object.keys(transformModel).length
      ? transformModel
      : this.transformModel

    const finalUrl = makeURL(
      this.url,
      this.options?.pathParams || [],
      this.options?.queryParams || {}
    )

    new Promise(async (x, y) => {
      _self?.setIsLoading(true)

      await fetch(finalUrl, this.options?.headers || {})
        .then(res => {
          if (res.status > 400 && res.status >= 400) {
            throw res
          } else {
            return res.json()
          }
        })
        .then(data => {
          _self.setIsLoading(false)
          _self.setResponse(data)

          if (_self.successCbk) {
            _self.successCbk(data || {})
          }
        })
        .catch(err => {
          _self.setIsLoading(false)

          if (_self.failureCbk) {
            _self.failureCbk(err || {})
          }
        })
    })
    return this
  }
}

export { Fetch }
export default Fetch
