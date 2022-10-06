export interface ITextProps {
  text: string
  styleModule?: string
}

export interface IHeadingTextProps extends ITextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export interface ILinkTextProps extends ITextProps {}
export interface IParagraphTextProps extends ITextProps {}
export interface IFormLabelTextProps extends ITextProps {}
export interface IMessageTextProps extends ITextProps {}
export interface ITitleTextProps extends ITextProps {}
export interface IInfoTextProps extends ITextProps {}
export interface IHintTextProps extends ITextProps {}
export interface IButtonTextProps extends ITextProps {}
export interface IUnderlineTextProps extends ITextProps {}
export interface IStrikethroughTextProps extends ITextProps {}
export interface INumberTextProps extends ITextProps {}
export interface IAddressTextProps extends ITextProps {}
