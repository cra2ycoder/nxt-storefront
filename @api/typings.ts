import { IFetchOptions } from '@utils/web/typings'

export type TFetchTransformModelProps = {
  [prop: any]: any
}

export type TAPIStatus = 'init' | 'fetching' | 'success' | 'failed' | 'aborted'

export interface IUseFetchProps {
  url: string
  init?: boolean
  options?: IFetchOptions
  transformModel?: TFetchTransformModelProps | undefined
}
