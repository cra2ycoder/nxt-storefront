import React from 'react'
import Link from '@mui/material/Link'
import { ILinkTextProps } from './typings'

function LinkText({ text, href, rel, target }: ILinkTextProps) {
  return (
    <Link href={href} rel={rel || 'noopener noreferrer'} target={target}>
      {text}
    </Link>
  )
}

export { LinkText }
export default LinkText
