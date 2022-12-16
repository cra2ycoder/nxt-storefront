import React from 'react'
import Typography from '@mui/material/Typography'
import { ISpanTextProps } from './typings'

function SpanText({ text, styleModule = '' }: ISpanTextProps) {
  return (
    <Typography className={styleModule} component="span">
      {text}
    </Typography>
  )
}

export { SpanText }
export default SpanText
