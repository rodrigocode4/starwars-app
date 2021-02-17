import React, { useState, useEffect } from 'react'
import * as S from './styled'
import { Character } from 'Utils/types'
import SearchItem from 'components/SearchItem'
import { useSearch } from 'Utils/search.context'

const ListCharacters = () => {
  const { search } = useSearch()
  const [characters, setCharacters] = useState<Character[]>()

  useEffect(() => {
    if (characters !== undefined) {
      return
    } else {
      getData(search)
    }
  }, [search, characters])

  async function getData(search: string) {
    if (search !== '') {
      const rs = await fetch(`https://swapi.dev/api/people/?search=${search}`)
      const { results } = await rs.json()

      const data: Array<Character> = []
      for await (const { name, homeworld, gender, url } of results) {
        const rs = await fetch(homeworld.replace(/^http/, 'https'))
        const { name: planet } = await rs.json()
        const dataFiltered: Character = {
          name,
          homeworld: planet.replace(/^http/, 'https'),
          gender,
          url
        }
        data.push(dataFiltered)
      }
      setCharacters(data)
    }
  }

  return (
    <S.OL>
      {characters?.map((character: Character) => (
        <S.LI key={character.url}>
          <SearchItem
            name={character.name}
            homeworld={character.homeworld}
            gender={character.gender || 'n/a'}
            url={character.url}
          />
        </S.LI>
      ))}
    </S.OL>
  )
}
export default ListCharacters
