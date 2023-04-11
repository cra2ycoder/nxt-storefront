export interface IFetchNowProps {
  successCbk: (res: object) => void
  failureCbk: (err: object) => void

  onSuccess(cbk: (res: object) => void): any
  onFail(cbk: (err: object) => void): any
  callee(url: string, headers: Object, transformModel: object): any
}

export interface IUseFetchProps {
  url: string
  init?: boolean
  headers?: object
  transformModel?: object
}
