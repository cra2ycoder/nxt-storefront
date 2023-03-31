import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { PageContainer } from '@ui/layouts/pages/PageContainer'

export default {
  title: 'UI/Layouts/Pages/PageContainer',
  component: PageContainer,
} as Meta

const Template: Story<{}> = args => <PageContainer {...args} />

export const PageContainerComponent = Template.bind({})
PageContainerComponent.storyName = 'Page Container'
PageContainerComponent.args = {}
