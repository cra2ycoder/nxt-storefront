import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IBaseImageProps } from '@ui/elements/images/typings'
import { BaseImage } from '@ui/elements/images/BaseImage'
// import customStyles from './customStyles.module.scss'
// import { typoStyles } from '@styles/scss/core'

export default {
  title: 'UI/Elements/Images/BaseImage',
  component: BaseImage,
} as Meta

const Template: Story<IBaseImageProps> = args => (
  <div style={{ width: '350px', height: '250px', backgroundColor: 'red' }}>
    <BaseImage {...args} />
  </div>
)

export const BaseImageStory = Template.bind({})
BaseImageStory.storyName = 'Base Image'
BaseImageStory.args = {
  src: 'https://media.istockphoto.com/id/454353339/photo/girl-making-rangoli-and-decorating-with-oil-lamps-for-diwali.jpg?s=1024x1024&w=is&k=20&c=js_T7a3n2b8Nb6Fit19DByzGgxlqMHRr8DWNSjzR-TI=',
}
