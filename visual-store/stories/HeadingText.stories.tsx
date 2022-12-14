import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { IHeadingTextProps } from '@ui/contents/typography/typings'
import { HeadingText } from '@ui/contents/typography/HeadingText'
import customStyles from './customStyles.module.scss'

export default {
  title: 'UI/Contents/Headings',
  component: HeadingText,
} as Meta

const Template: Story<IHeadingTextProps> = args => <HeadingText {...args} />

export const Headings = Template.bind({})
Headings.storyName = 'h1-h6'
Headings.args = {
  text: 'Heading Text',
  // styleModule: `${customStyles.h1} ${customStyles['txt-transform']}`,
}
