import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperLink = styled.div`
  color: #cacaca;
  width: 80%;
  height: auto;
  margin: 0.3125rem 0 0.875rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.h2`
  font-size: 1rem;
  color: #cacaca;
  display: inline;
  ${media.greaterThan('huge')`
    font-size: 1.2rem;
  `}
`

export const HR = styled.hr`
  color: #ffe81f;
  background-color: #ffe81f;
  width: 100%;
  height: 1px;
  border: 0;
  margin: 3px 0 0 0;
`

export const WarapperName = styled.div`
  margin-top: 0.3rem;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: 0.5s ease-out;
  background: linear-gradient(to left, transparent 50%, yellow 50%) right;
  background-size: 250%;
  &:hover {
    background-position: left;
    cursor: pointer;
    & > * {
      color: #3a3a3a;
    }
  }

  ${media.greaterThan('huge')`
    margin-top: 0.4rem;
  `}
`
