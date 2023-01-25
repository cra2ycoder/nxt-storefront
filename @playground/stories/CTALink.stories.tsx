import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ICTALinkProps } from '@ui/elements/links/typings'
import { CTALink } from '@ui/elements/links/CTALink'

export default {
  title: 'UI/Elements/Links/CTALink',
  component: CTALink,
} as Meta

const Template: Story<ICTALinkProps> = args => <CTALink {...args} />

export const CTALinkComponent = Template.bind({})
CTALinkComponent.storyName = 'CTA Link'
CTALinkComponent.args = {
  text: 'A tag with click navigation',
  onClick: () => {
    alert('onClick Fired')
  },
}
