import React from 'react'
import * as S from './styled'
import { ICharacter } from 'Utils/types'
import ProfileCardItem from '../ProfileCardItem'

type Props = {
  character?: ICharacter
}

const ProfileCard = ({ character }: Props) => {
  const ProfileData = new Map<string, string | number | undefined>([
    ['Gender', character?.gender],
    ['Mass', character?.mass],
    ['Height', character?.height],
    ['Planet', character?.homeworld],
    ['Hair color', character?.hair_color],
    ['Skin color', character?.skin_color],
    ['Birth Year', character?.birth_year]
  ])

  return (
    <>
      <S.WrapperProfileCard>
        <S.SectionTitle>Profile</S.SectionTitle>
        <S.UL>
          {[...ProfileData].map((element) => (
            <S.LI key={element[0]}>
              <ProfileCardItem keyLabel={element[0]} value={element[1]} />
            </S.LI>
          ))}
        </S.UL>
      </S.WrapperProfileCard>
    </>
  )
}

export default ProfileCard
