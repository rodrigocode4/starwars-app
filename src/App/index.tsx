import React, { useEffect, useState } from 'react'
import Layout from 'Layout'
import { FunctionContext } from 'Utils/context'
import type { Character } from 'Utils/context'

function App() {
  const [search, setSearch] = useState<string>('')
  const [state, setState] = useState<Character[]>()

  useEffect(() => {
    async function getData() {
      if (search !== '') {
        const rs = await fetch(`https://swapi.dev/api/people/?search=${search}`)
        const { results } = await rs.json()

        const data: Array<Character> = []
        for await (const { name, homeworld, gender, url } of results) {
          const rs = await fetch(homeworld)
          const { name: planet } = await rs.json()
          const dataFiltered: Character = {
            name,
            homeworld: planet,
            gender,
            url
          }
          data.push(dataFiltered)
        }
        setState(data)
      }
    }
    getData()
  }, [search])

  function handleClick(searchText: string) {
    setSearch(searchText.trim())
  }

  return (
    <>
      <FunctionContext.Provider value={handleClick}>
        <Layout characters={state} />
      </FunctionContext.Provider>
    </>
  )
}

export default App
