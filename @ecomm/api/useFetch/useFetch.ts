import { useMemo, useState } from 'react'

function useFetch(props) {
  const {
    url = '',
    init = true,
    options: defaultOptions = {},
    transformModel: defaultTransformModel = {},
  } = props

  const [isLoading, setIsLoading] = useState(false)
  const [fetchedResponse, setFetchedResponse] = useState({})

  async function fetchNow(options, transformModel) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

    return new Promise((resolve, reject) => {})
  }

  useMemo(async () => {
    if (init === true) {
      //   await fetchNow(defaultOptions, defaultTransformModel, false)
    }
  }, [])

  return {
    isLoading,
    fetchedResponse,
    fetchNow,
    setFetchedResponse,
    setIsLoading,
  }
}

export { useFetch }
export default useFetch
