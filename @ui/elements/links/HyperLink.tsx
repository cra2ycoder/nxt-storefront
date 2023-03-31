import React from 'react'
import { IHyperLinkProps } from './typings'

function HyperLink({ text, href, rel, target }: IHyperLinkProps) {
  return (
    <a href={href} rel={rel || 'noopener noreferrer'} target={target}>
      {text}
    </a>
  )
}

export { HyperLink }
export default HyperLink
