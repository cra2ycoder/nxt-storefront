import React from 'react'
import Typography from '@mui/material/Typography'
import { IHeadingTextProps } from './typings'

function HeadingText({
  text,
  variant = 'h1',
  styleModule = '',
}: IHeadingTextProps) {
  return (
    <Typography className={styleModule} variant={variant}>
      {text}
    </Typography>
  )
}

export { HeadingText }
export default HeadingText
