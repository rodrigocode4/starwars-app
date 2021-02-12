import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { URL } from 'Utils/types'

import LinkCardItem from '../LinkCardItem'

type Props = {
  urlLink: Array<URL> | undefined
  name: string
}

const LinkCard = ({ urlLink, name }: Props) => {
  const [link, setLink] = useState<Map<string, URL>>()

  useEffect(() => {
    if (link !== undefined) {
      return
    } else {
      fetchLink(urlLink)
    }
  })

  async function fetchLink(urlLink: Array<URL> | undefined) {
    if (urlLink === undefined) {
      return
    }
    const linkNameAndUrl: Map<string, URL> = new Map()
    for await (const link of urlLink) {
      const rs = await fetch(link.replace(/^http/, 'https'))
      if (name !== 'Films') {
        const { name } = await rs.json()
        linkNameAndUrl.set(name, link)
      } else {
        const { title } = await rs.json()
        linkNameAndUrl.set(title, link)
      }
    }
    setLink(linkNameAndUrl)
  }
  return (
    <S.WrapperLink>
      <S.SectionTitle>{name}</S.SectionTitle>
      <S.WrapperLinkCards>
        <S.UL>
          {link !== undefined
            ? [...link].map((element, index) => (
                <S.LI key={index}>
                  <LinkCardItem name={element[0]} valueUrl={element[1]} />
                </S.LI>
              ))
            : null}
        </S.UL>
      </S.WrapperLinkCards>
    </S.WrapperLink>
  )
}

export default LinkCard
