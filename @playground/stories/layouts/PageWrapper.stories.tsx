import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { PageWrapper } from '@ui/layouts/pages/PageWrapper'

export default {
  title: 'UI/Layouts/Pages/PageWrapper',
  component: PageWrapper,
} as Meta

const Template: StoryFn<{}> = args => <PageWrapper {...args} />

export const PageWrapperComponent = Template.bind({})
PageWrapperComponent.storyName = 'Page Wrapper'
PageWrapperComponent.args = {}
