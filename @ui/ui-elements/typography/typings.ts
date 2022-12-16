export interface ITextProps {
  text: string
  styleModule?: string
  [key]?: string
}

export interface IHeadingTextProps extends ITextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface ILinkTextProps extends ITextProps {
  href: string
  rel?: string
  target?: '_blank' | '_self'
}

export interface IParagraphTextProps extends ITextProps {}
export interface ISpanTextProps extends ITextProps {}
