import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image'
import { imageStyles } from '@styles/scss'
import { IBaseImageProps } from './typings'

function BaseImage(props: IBaseImageProps) {
  const {
    src = '',
    srcSet = '',
    alt = 'base image',
    loading = 'lazy',
    styleModule = {},
    size = 'fit',
    align = 'center',
  } = props
  const [hasError, setHasError] = useState(false)

  const onImageLoadingError = () => {
    setHasError(true)
  }

  const parentStyle = `${styleModule.imgParent || imageStyles.imgParent} ${
    imageStyles[align]
  }`

  return (
    <>
      {src && !hasError && (
        <div className={parentStyle}>
          <img
            className={styleModule.imgTag || imageStyles.imgTag}
            src={src}
            srcSet={srcSet}
            alt={alt}
            loading={loading}
            onError={onImageLoadingError}
          />
        </div>
      )}
      {(!src || hasError) && (
        <div
          className={styleModule.imgPlaceholder || imageStyles.imgPlaceholder}
        >
          <ImageIcon />
        </div>
      )}
    </>
  )
}

export { BaseImage }
export default BaseImage
