import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WrapperLink = styled.div`
  color: #cacaca;
  width: 122px;
  height: 33px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.h2`
  font-size: 11px;
  margin: 0 0 0 25px;
  width: 117px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #cacaca;
  padding: 7px 0 7px 0;
  transition: 0.5s ease-out;
  background: linear-gradient(to left, #3a3a3a 50%, yellow 50%) right;
  background-size: 250%;
  &:hover {
    background-position: left;
    color: #3a3a3a;
  }
`

export const HR = styled.hr`
  margin: 0 0 0 25px;
  width: 117px;
  border: 0.5px solid yellow;
  background: yellow;
`
export const WarapperName = styled(Link)`
  text-decoration: none;
`
