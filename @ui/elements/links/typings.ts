import { ITextProps } from '../typography/typings'

export interface IBaseLinkProps extends ITextProps {
  href: string
  rel?: string
  target?: '_blank' | '_self'
}

export interface IRouterLinkProps extends IBaseLinkProps {}
export interface IHyperLinkProps extends IBaseLinkProps {}
export interface ICTALinkProps extends IBaseLinkProps {
  onClick: () => void
}
