import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { IHeadingTextProps } from '@ui/elements/typography/typings'
import { HeadingText } from '@ui/elements/typography/HeadingText'
// import customStyles from './customStyles.module.scss'
// import { typoStyles } from '@styles/scss/core'

export default {
  title: 'UI/Elements/Typography/Headings',
  component: HeadingText,
} as Meta

const Template: StoryFn<IHeadingTextProps> = args => <HeadingText {...args} />

export const H1 = Template.bind({})
H1.storyName = 'h1'
H1.args = {
  text: 'Heading Text',
  variant: 'h1',
  // styleModule: customStyles.h1,
}

export const H2 = Template.bind({})
H2.storyName = 'h2'
H2.args = {
  text: 'Heading Text',
  variant: 'h2',
}

export const H3 = Template.bind({})
H3.storyName = 'h3'
H3.args = {
  text: 'Heading Text',
  variant: 'h3',
}

export const H4 = Template.bind({})
H4.storyName = 'h4'
H4.args = {
  text: 'Heading Text',
  variant: 'h4',
}

export const H5 = Template.bind({})
H5.storyName = 'h5'
H5.args = {
  text: 'Heading Text',
  variant: 'h4',
}

export const H6 = Template.bind({})
H6.storyName = 'h6'
H6.args = {
  text: 'Heading Text',
  variant: 'h6',
}
