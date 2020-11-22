import React from 'react'
import * as S from './styled'
import { Character } from 'Utils/types'
import SearchItem from 'components/SearchItem'

type Props = {
  characters?: Array<Character>
}

const ListCharacters = ({ characters }: Props) => {
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
