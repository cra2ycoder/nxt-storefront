import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IHeadingTextProps } from '@ui/elements/typography/typings'
import { HeadingText } from '@ui/elements/typography/HeadingText'
import customStyles from './customStyles.module.scss'
import { typoStyles } from '@styles/scss/core'

export default {
  title: 'UI/Elements/Headings',
  component: HeadingText,
} as Meta

const Template: Story<IHeadingTextProps> = args => <HeadingText {...args} />

export const Headings = Template.bind({})
Headings.storyName = 'h1-h6'
Headings.args = {
  text: 'Heading Text',
  // styleModule: customStyles.h1,
  // styleModule: `${customStyles.h1} ${customStyles['txt-transform']}`,
}
