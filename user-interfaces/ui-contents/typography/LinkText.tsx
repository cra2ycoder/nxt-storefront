import React from 'react'
import Typography from '@mui/material/Typography'
import { ILinkTextProps } from './typings'

function LinkText({ text }: ILinkTextProps) {
  return <Typography>{text}</Typography>
}

export { LinkText }
