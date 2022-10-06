import React from 'react'
import Typography from '@mui/material/Typography'
import { IHeadingTextProps } from './typings'
import '@ui/themes/styles/typography.module.scss'

function HeadingText({ text, variant = 'h1' }: IHeadingTextProps) {
  return (
    <Typography className={'h1'} variant={variant}>
      {text}
    </Typography>
  )
}

export { HeadingText }
