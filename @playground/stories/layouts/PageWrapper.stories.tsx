import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { PageWrapper } from '@ui/layouts/pages/PageWrapper'

export default {
  title: 'UI/Layouts/Pages/PageWrapper',
  component: PageWrapper,
} as Meta

const Template: Story<{}> = args => <PageWrapper {...args} />

export const PageWrapperComponent = Template.bind({})
PageWrapperComponent.storyName = 'Page Wrapper'
PageWrapperComponent.args = {}
