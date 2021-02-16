import styled from 'styled-components'

export const WrapperLink = styled.div`
  color: #cacaca;
  width: 80%;
  height: 33px;
  margin: 5px 0 5px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.h2`
  font-size: 18px;
  color: #cacaca;
  display: inline;
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
`
