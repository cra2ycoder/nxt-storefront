import { IFetchNowProps, IUseFetchOptionsProps } from './typings'

class FetchNow implements IFetchNowProps {
  successCbk = (res: object) => {}
  failureCbk = (err: object) => {}

  url = ''
  options: IUseFetchOptionsProps = undefined
  transformModel = undefined
  preloadState = undefined

  constructor(url, options, transformModel, preloadState) {
    this.url = url
    this.options = options
    this.transformModel = transformModel
    this.preloadState = preloadState
  }

  onSuccess(cbk: any) {
    this.successCbk = cbk
    return this
  }

  onFail(cbk: any) {
    this.failureCbk = cbk
    return this
  }

  callee(
    url: string = '',
    options: object = {},
    transformModel: object = {},
    preloadState: any = null
  ) {
    this.url = url && url !== 'same' ? url : this.url
    this.options = Object.keys(options).length ? options : this.options
    this.transformModel = Object.keys(transformModel).length
      ? transformModel
      : this.transformModel
    this.preloadState =
      preloadState || this.preloadState || ((s: boolean) => {})

    console.log({
      url,
      options,
      transformModel,
      preloadState,
    })

    // console.log(this.preloadState)

    this.preloadState(true)

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
          this.preloadState(false)
          if (this.successCbk) {
            this.successCbk(data || {})
          }
        })
        .catch(err => {
          this.preloadState(false)
          if (this.failureCbk) {
            this.failureCbk(err || {})
          }
        })
    })
    return this
  }
}

export { FetchNow }
export default FetchNow
