import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { IRouterLinkProps } from '@ui/elements/links/typings'
import { RouterLink } from '@ui/elements/links/RouterLink'

export default {
  title: 'UI/Elements/Links/RouterLink',
  component: RouterLink,
} as Meta

const Template: StoryFn<IRouterLinkProps> = args => <RouterLink {...args} />

export const RouterLinkComponent = Template.bind({})
RouterLinkComponent.storyName = 'Router Link'
RouterLinkComponent.args = {
  text: 'Router Link for CSR Navigation',
  href: 'https://www.google.com/',
}
