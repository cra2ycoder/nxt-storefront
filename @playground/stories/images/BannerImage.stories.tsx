import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IBannerImageProps } from '@ui/elements/images/typings'
import { BannerImage } from '@ui/elements/images/BannerImage'
// import customStyles from './customStyles.module.scss'
// import { typoStyles } from '@styles/scss/core'

export default {
  title: 'UI/Elements/Images/BannerImage',
  component: BannerImage,
} as Meta

const Template: Story<IBannerImageProps> = args => <BannerImage {...args} />

export const BannerImageStory = Template.bind({})
BannerImageStory.storyName = 'Banner Image'
BannerImageStory.args = {
  src: 'https://media.istockphoto.com/id/454353339/photo/girl-making-rangoli-and-decorating-with-oil-lamps-for-diwali.jpg?s=1024x1024&w=is&k=20&c=js_T7a3n2b8Nb6Fit19DByzGgxlqMHRr8DWNSjzR-TI=',
}
