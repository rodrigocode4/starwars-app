import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: radial-gradient(#4d4d4d, #290c2d);
  font-family: 'Mulish', sans-serif;

  ${media.lessThan('medium')`
    justify-content: space-between;
  `}
`
