export interface IBaseImageSizeProps {
  size?: 'fit' | 'contain' | 'cover'
  align?: 'center' | 'top' | 'right' | 'bottom' | 'left'
}

export interface IBaseImageProps extends IBaseImageSizeProps {
  src: string
  alt: string
  srcSet?: string
  loading?: 'lazy' | 'eager'
  styleModule?: any
  [key]?: string
}

export interface IBannerImageProps extends IBaseImageProps {}

export interface IThumbnailImageProps extends IBaseImageProps {}

export interface IProductImageProps extends IBaseImageProps {}

export interface IIconImageProps extends IBaseImageProps {}
