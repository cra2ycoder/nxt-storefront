import BaseImage from './BaseImage'
import { IBannerImageProps } from './typings'

function BannerImage(props: IBannerImageProps) {
  return (
    <>
      <BaseImage {...props} />
    </>
  )
}

export { BannerImage }
export default BannerImage
