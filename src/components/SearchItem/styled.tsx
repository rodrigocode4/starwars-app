import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

export const WrapperItem = styled.div`
  width: 303px;
  height: 93px;
  margin: 25px 0 25px 0;
  background: #3a3a3a;
  border-radius: 5px;
  border-left: 0.3rem solid #ffe81f;
  ${media.lessThan('small')`
    width: 75vw;
    height: 93px;
  `}
`

export const WrapperLink = styled(Link)`
  height: 100%;
  width: 100%;
  margin-top: 5px;
  color: #cacaca;
  display: inline-block;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #ffe81f;
  }
`

export const HeadingName = styled.h1`
  font-size: 1.7rem;
  margin-left: 10px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
  color: #cacaca;
  letter-spacing: 1px;
  width: max-content;
  ${media.lessThan('small')`
    font-size: 1.5rem;
  `}
`

export const HeadingPlanet = styled.h2`
  font-size: 1.25rem;
  margin-left: 10px;
  font-family: 'Mulish', sans-serif;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
  color: #cacaca;
  letter-spacing: 1px;
  width: max-content;
  ${media.lessThan('small')`
    font-size: 1.2rem;
  `}
`

export const HeadingGener = styled.h3`
  font-size: 16px;
  margin-left: 10px;
  font-family: 'Mulish', sans-serif;
  font-weight: 300;
  text-align: left;
  color: #cacaca;
  letter-spacing: 1px;
  width: max-content;
`
export const HR = styled.hr`
  color: #ffe81f;
  background-color: #ffe81f;
  width: 85%;
  height: 1px;
  margin: 10px 0 0 10px;
  border: 0;
`
