import React from 'react'
import * as S from './styled'

type Node = {
  children?: React.ReactNode
}

const Modal = ({ children }: Node) => {
  return (
    <S.WrapperModal>
      <S.BoxModal>
        <S.Head>
          <S.TitleName>Snowspeeder</S.TitleName>
          <S.CloseButtom>
            <S.CloseIcon />
          </S.CloseButtom>
        </S.Head>

        {children}
      </S.BoxModal>
    </S.WrapperModal>
  )
}

export default Modal
