import React from 'react'
import Link from '@mui/material/Link'
import { IRouterLinkProps } from './typings'

function RouterLink({ text, href, rel, target }: IRouterLinkProps) {
  return (
    <Link href={href} rel={rel || 'noopener noreferrer'} target={target}>
      {text}
    </Link>
  )
}

export { RouterLink }
export default RouterLink
