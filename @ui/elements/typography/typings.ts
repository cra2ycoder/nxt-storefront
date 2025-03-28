export interface ITextProps {
  text: string
  styleModule?: string
  [key]?: string
}

export interface IHeadingTextProps extends ITextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface IParagraphTextProps extends ITextProps {}
export interface ISpanTextProps extends ITextProps {}
