import React from 'react'
import { ILayoutProps } from './typings'

/**
 * @requirements
 * - always page main tag
 * - occupies full width and height of the browser
 * - overflow-y is auto
 * - doesn't have any padding or margins
 *
 */
function PageWrapper(props: ILayoutProps) {
  return <main>{props.children}</main>
}

export { PageWrapper }
export default PageWrapper
