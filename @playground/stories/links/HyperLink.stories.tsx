import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { IHyperLinkProps } from '@ui/elements/links/typings'
import { HyperLink } from '@ui/elements/links/HyperLink'

export default {
  title: 'UI/Elements/Links/HyperLink',
  component: HyperLink,
} as Meta

const Template: StoryFn<IHyperLinkProps> = args => <HyperLink {...args} />

export const HyperLinkComponent = Template.bind({})
HyperLinkComponent.storyName = 'Hyper Link'
HyperLinkComponent.args = {
  text: 'A tag with href',
  href: 'https://www.google.com/',
}
