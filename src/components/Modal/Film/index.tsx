import React, { useEffect, useState } from 'react'
import * as S from './styled'
import CardItem from '../CardItem'

import { useTransport as useModal } from 'Utils/context'
import { IFilm, ICharacter } from 'Utils/types'

type Props = {
  param: string
}

const Film = ({ param }: Props) => {
  const [film, setFilm] = useState<IFilm>()
  const [characters, SetCharacters] = useState<Array<string>>([])
  const { setName } = useModal()

  useEffect(() => {
    if (film !== undefined) {
      return
    } else {
      const filmParam = param.replace(/^\//, '')
      fetchFilm(filmParam)
    }
  })

  async function fetchFilm(filmParam: string) {
    const rs = await fetch(`https://swapi.dev/api/${filmParam}`)
    const film = (await rs.json()) as IFilm
    setFilm(film)
    setName(film.title)
    fetchCharacters(film.characters)
  }

  async function fetchCharacters(listUrlCharacters: Array<string>) {
    const requests: Array<Promise<ICharacter>> = listUrlCharacters.map((url) =>
      fetch(url.replace(/^http/, 'https')).then((rs) => rs.json())
    )
    const rs = (await Promise.all(requests)) as Array<ICharacter>
    const names: Array<string> = rs.map(({ name }) => name)
    SetCharacters(names)
  }
  return (
    <>
      <S.Sinopse keyLabel="Sinopse" value={film?.opening_crawl} />
      <S.Character keyLabel="Characters" values={characters} />
      <S.WapperFooter>
        <CardItem keyLabel="Director" value={film?.director} />
        <CardItem keyLabel="Producer" value={film?.producer} />
      </S.WapperFooter>
    </>
  )
}

export default Film
