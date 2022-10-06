import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { IHeadingTextProps } from '@ui/contents/typography/typings'
import { HeadingText } from '@ui/contents/typography/HeadingText'

export default {
  title: 'UI/Contents/HeadingText',
  component: HeadingText,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<IHeadingTextProps> = args => <HeadingText {...args} />

export const H1 = Template.bind({})
H1.args = {
  text: 'Heading Text',
}

export const H2 = Template.bind({})
H2.args = {
  text: 'Heading Text',
  variant: 'h2',
}

export const H3 = Template.bind({})
H3.args = {
  text: 'Heading Text',
  variant: 'h3',
}

export const H4 = Template.bind({})
H4.args = {
  text: 'Heading Text',
  variant: 'h4',
}

export const H5 = Template.bind({})
H5.args = {
  text: 'Heading Text',
  variant: 'h5',
}

export const H6 = Template.bind({})
H6.args = {
  text: 'Heading Text',
  variant: 'h6',
}
