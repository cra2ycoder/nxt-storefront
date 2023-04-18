import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { PageContainer } from '@ui/layouts/pages/PageContainer'

export default {
  title: 'UI/Layouts/Pages/PageContainer',
  component: PageContainer,
} as Meta

const Template: StoryFn<{}> = args => <PageContainer {...args} />

export const PageContainerComponent = Template.bind({})
PageContainerComponent.storyName = 'Page Container'
PageContainerComponent.args = {}
