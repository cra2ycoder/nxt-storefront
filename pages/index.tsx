import React from 'react'
import { useFetch } from '@api/fetch'

function Example() {
  const { fetchNow, response, status } = useFetch({
    init: false,
    url: 'https://jsonplaceholder.typicode.com/posts',
  })

  const applyFilterNow = () => {
    fetchNow({
      headers: {
        method: 'GET',
      },
      queryParams: {
        userId: 1,
      },
    })
  }

  console.log({ status, response })

  return (
    <div>
      <button onClick={applyFilterNow}>Apply Filter</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <code style={{ maxWidth: '80%' }}>
          {status === 'fetching' ? 'fetching...' : JSON.stringify(response)}
        </code>
      </div>
    </div>
  )
}

export default function index() {
  return <Example />
}
