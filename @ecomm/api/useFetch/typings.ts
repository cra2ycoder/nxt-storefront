export type IFetchNowFunctionProps = (
  url?: string,
  options?: IUseFetchOptionsProps,
  transformModel?: object,
  preloadStateCbk?: (state: boolean) => void
) => any

export interface IFetchNowProps {
  successCbk: (res: object) => void
  failureCbk: (err: object) => void

  onSuccess(cbk: (res: object) => void): any
  onFail(cbk: (err: object) => void): any
  callee: IFetchNowFunctionProps
}

export interface IUseFetchOptionsProps {
  queryParams?: object
  postBody?: object
  headers?: object
}

export interface IUseFetchProps {
  url: string
  init?: boolean
  options?: IUseFetchOptionsProps
  transformModel?: object
}
