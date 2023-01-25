import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IRouterLinkProps } from '@ui/elements/links/typings'
import { RouterLink } from '@ui/elements/links/RouterLink'

export default {
  title: 'UI/Elements/Links/RouterLink',
  component: RouterLink,
} as Meta

const Template: Story<IRouterLinkProps> = args => <RouterLink {...args} />

export const RouterLinkComponent = Template.bind({})
RouterLinkComponent.storyName = 'Router Link'
RouterLinkComponent.args = {
  text: 'Router Link for CSR Navigation',
  href: 'https://www.google.com/',
}
