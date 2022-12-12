import React from 'react'
import Typography from '@mui/material/Typography'
import { IHeadingTextProps } from './typings'
import { typoStyles } from '@ui/themes'

function HeadingText({ text, variant = 'h1' }: IHeadingTextProps) {
  return (
    <Typography className={typoStyles.h1} variant={variant}>
      {text}
    </Typography>
  )
}

export { HeadingText }
