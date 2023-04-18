// import {} from '@utils/web'

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
  successCbk?: Function | undefined
  failureCbk?: Function | undefined

  constructor(
    url: string,
    options?: TFetchOptionsProps,
    transformModel?: TFetchTransformModelProps,
    setIsLoading?: Function
  ) {
    this.url = url
    this.options = options
    this.transformModel = transformModel
    this.setIsLoading = setIsLoading || ((s: boolean) => {})
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
    this.options = Object.keys(options).length ? options : this.options
    this.transformModel = Object.keys(transformModel).length
      ? transformModel
      : this.transformModel

    console.log({ options: this.options, transformModel: this.transformModel })

    const finalUrl = ''

    this.setIsLoading(true)

    new Promise(async (x, y) => {
      await fetch(this.url, this.options?.headers || {})
        .then(res => {
          if (res.status > 400 && res.status >= 400) {
            throw res
          } else {
            return res.json()
          }
        })
        .then(data => {
          this.setIsLoading(false)

          if (this.successCbk) {
            this.successCbk(data || {})
          }
        })
        .catch(err => {
          this.setIsLoading(false)

          if (this.failureCbk) {
            this.failureCbk(err || {})
          }
        })
    })
    return this
  }
}

export { Fetch }
export default Fetch
