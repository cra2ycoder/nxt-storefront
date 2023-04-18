import React, { useEffect } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
// import { useFetch } from '@ecomm/api/useFetch'

function Example() {
  let isLoading = false
  let response = {}
  // const { fetchNow, response, isLoading } = useFetch({
  //   init: true,
  //   url: 'https://storefront.api.test.nuskin.com/orchestrationservices/storefront/catalogs/categories/hair_care/products?size=12&locale=en_US&storeId=430',
  // })

  // const applyFilterNow = () => {
  //   fetchNow({
  //     queryParams: {
  //       filter:
  //         '%7B%22filters%22%3A%5B%7B%22field%22%3A%22facet_productCollections%22%2C%22operation%22%3A%22IN%22%2C%22value%22%3A%22ageLOC%22%7D%5D%7D',
  //       size: 12,
  //       locale: 'en_US',
  //     },
  //   })
  // }

  return (
    <div>
      {/* <button onClick={applyFilterNow}>Apply Filter</button> */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <code style={{ maxWidth: '80%' }}>
          {isLoading ? 'loading...' : JSON.stringify(response)}
        </code>
      </div>
    </div>
  )
}

export default {
  title: 'API/Fetch/UseFetch',
  component: Example,
} as Meta

const Template: Story = args => <Example {...args} />

export const Example1 = Template.bind({})
Example1.storyName = 'useFetch'
