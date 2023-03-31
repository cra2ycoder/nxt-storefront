import React from 'react'
import { IPageContainer } from './typings'

/**
 * @requirements
 * - always pages first panel after main/PageWrapper component
 * - occupies full width and height will be auto or based on the content height
 * - overflow will be hidden
 * - has its own inner padding
 * - controls max-width of the site
 */
function PageContainer(props: IPageContainer) {
  return <div>{props.children}</div>
}

export { PageContainer }
export default PageContainer
