import React from 'react'
import Typography from '@mui/material/Typography'
import { IParagraphTextProps } from './typings'

function ParagraphText({ text, styleModule = '' }: IParagraphTextProps) {
  return <Typography className={styleModule}>{text}</Typography>
}

export { ParagraphText }
export default ParagraphText
