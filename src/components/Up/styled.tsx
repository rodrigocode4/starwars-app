import styled, { css } from 'styled-components'
import { TriangleFill as TriangleUp } from '@styled-icons/bootstrap'

const CssUp = css`
  fill: #ffe81f;
`

export const Up = styled(TriangleUp)`
  ${CssUp}
`
export const WrapperUp = styled.div`
  height: 46px;
  width: 46px;
  margin-top: 341px;
  margin-left: 675px;
  cursor: pointer;
`
