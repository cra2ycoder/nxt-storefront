export interface IFetchNowProps {
  successCbk: (res: object) => void
  failureCbk: (err: object) => void

  onSuccess(cbk: (res: object) => void): any
  onFail(cbk: (err: object) => void): any
  callee(url: string, headers: Object, transformModel: object): any
}
