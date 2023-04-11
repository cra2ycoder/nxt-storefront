import React, { useEffect } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { useFetch } from '@ecomm/api/useFetch'

function Example() {
  const { fetchNow, response } = useFetch({
    init: true,
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  })

  // useEffect(() => {
  //   fetchNow()
  //     .onSuccess(res => {
  //       console.log({ res })
  //     })
  //     .onFail(err => {
  //       console.log({ err })
  //     })
  // }, [])
  return <>{JSON.stringify(response)}</>
}

export default {
  title: 'API/Fetch/UseFetch',
  component: Example,
} as Meta

const Template: Story = args => <Example {...args} />

export const Example1 = Template.bind({})
Example1.storyName = 'useFetch'
