import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { ISpanTextProps } from '@ui/elements/typography/typings'
import { SpanText } from '@ui/elements/typography/SpanText'

export default {
  title: 'UI/Elements/Typography/SpanText',
  component: SpanText,
} as Meta

const Template: StoryFn<ISpanTextProps> = args => <SpanText {...args} />

export const SimpleText = Template.bind({})
SimpleText.storyName = 'Simple Text'
SimpleText.args = {
  text: `Neque porro`,
}
