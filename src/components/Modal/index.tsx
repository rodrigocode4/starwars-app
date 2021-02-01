import React, { useState } from 'react'
import * as S from './styled'

import Vehicle from './Vehicle'
import Starship from './Starship'

const Modal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  return (
    <S.WrapperModal style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      <S.BoxModal>
        <S.Head>
          <S.TitleName>{'vehicle.name'}</S.TitleName>
          <S.CloseButtom onClick={() => setIsVisible(false)}>
            <S.CloseIcon />
          </S.CloseButtom>
        </S.Head>
        <S.Body>
          {/* <Vehicle /> */}
          <Starship />
        </S.Body>
      </S.BoxModal>
    </S.WrapperModal>
  )
}

export default Modal
