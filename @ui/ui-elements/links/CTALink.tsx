import React from 'react'
import { ICTALinkProps } from './typings'

function CTALink({ text, href, rel, target, onClick }: ICTALinkProps) {
  const onLinkClick = e => {
    e.preventDefault()
    if (onClick) {
      onClick()
    }
  }

  return (
    <a href="#" rel={rel || 'noopener noreferrer'} onClick={onLinkClick}>
      {text}
    </a>
  )
}

export { CTALink }
export default CTALink
