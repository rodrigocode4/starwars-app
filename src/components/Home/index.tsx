import React from 'react'
import * as S from './styled'
import { useSearch } from 'Utils/search.context'

const Home = () => {
  const { setSearch } = useSearch()
  return (
    <S.WrapperLatter onClick={() => setSearch('')}>
      <S.Latter>Star $ Wars</S.Latter>
    </S.WrapperLatter>
  )
}

export default Home
