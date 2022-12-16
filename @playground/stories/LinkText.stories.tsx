import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ILinkTextProps } from '@ui/elements/typography/typings'
import { LinkText } from '@ui/elements/typography/LinkText'

export default {
  title: 'UI/Elements/Link',
  component: LinkText,
} as Meta

const Template: Story<ILinkTextProps> = args => <LinkText {...args} />

export const ATag = Template.bind({})
ATag.storyName = 'Shop Now'
ATag.args = {
  text: 'Shop Now',
  href: 'https://www.google.com/',
}

export const ProductTitle = Template.bind({})
ProductTitle.storyName = 'Product Title'
ProductTitle.args = {
  text: 'Urban Forest Oliver Blue RFID Blocking Leather Wallet for Men',
  href: 'https://www.google.com/',
}

export const VisitStore = Template.bind({})
VisitStore.storyName = 'Visit Store'
VisitStore.args = {
  text: 'Visit Store',
  href: 'https://www.google.com/',
}
