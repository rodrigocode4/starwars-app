import React from 'react'
import * as S from './styled'

import { useTransport } from 'Utils/context'

import Vehicle from './Vehicle'
import Starship from './Starship'
import Film from './Film'

const Modal = () => {
  const { param, modalVisible, setModalVisible, name } = useTransport()

  return (
    <S.WrapperModal isVisible={modalVisible}>
      <S.BoxModal isFilm={/films/.test(param)}>
        <S.Head>
          <S.TitleName>{name}</S.TitleName>
          <S.CloseButtom onClick={() => setModalVisible(false)}>
            <S.CloseIcon />
          </S.CloseButtom>
        </S.Head>
        <S.Body>
          {/vehicles/.test(param) && <Vehicle param={param} />}
          {/starships/.test(param) && <Starship param={param} />}
          {/films/.test(param) && <Film param={param} />}
        </S.Body>
      </S.BoxModal>
    </S.WrapperModal>
  )
}

export default Modal
