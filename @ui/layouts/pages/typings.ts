import { ReactNode } from 'react'

export interface ILayoutProps {
  children?: ReactNode
}

export interface IPageContainer extends ILayoutProps {
  padding?: number
  maxWidth?: number
}
