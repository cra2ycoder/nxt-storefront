export type TFetchTransformModelProps = {
  [prop: any]: any
}

export type TFetchOptionsProps = {
  pathParams?: object
  headers?: object
  queryParams?: object
  postBody?: object
  [prop: any]: any
}

export type TFetchFunctionProps = (
  url?: string,
  options?: TFetchOptionsProps | null,
  transformModel?: TFetchTransformModelProps | undefined,
  isLoadingCbk?: (state: boolean) => void
) => any

export interface IFetchProps {
  url: string
  options?: TFetchOptionsProps
  transformModel?: TFetchTransformModelProps
  setIsLoading?: Function
  successCbk?: Function
  failureCbk?: Function

  new (
    url: string,
    options?: TFetchOptionsProps,
    transformModel?: TFetchTransformModelProps,
    setIsLoading?: Function
  ): void

  call?: (
    options?: TFetchOptionsProps,
    transformModel?: TFetchTransformModelProps
  ) => this
}

export interface IUseFetchProps {
  url: string
  init?: boolean
  options?: TFetchOptionsProps
  transformModel?: TFetchTransformModelProps | undefined
}
