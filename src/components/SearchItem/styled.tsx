import styled from 'styled-components'

export const WrapperItem = styled.div`
  width: 303px;
  height: 93px;
  margin: 25px 0 25px 0;
  background: #3a3a3a;
  border-radius: 5px;
  border-left: 0.3rem solid #ffe81f;
`

export const WrapperLink = styled.div`
  width: 192px;
  height: 78px;
  border-bottom: 0.07rem solid #ffe81f;
  margin-left: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #ffe81f;
  }
`

export const Link = styled.a``

export const HeadingName = styled.h1`
  font-size: 20px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
  color: #cacaca;
  letter-spacing: 1px;
  width: max-content;
`

export const HeadingPlanet = styled.h2`
  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
  color: #cacaca;
  letter-spacing: 1px;
  width: max-content;
`

export const HeadingGener = styled.h3`
  font-size: 14px;
  font-family: 'Mulish', sans-serif;
  font-weight: 300;
  line-height: 15px;
  text-align: left;
  color: #cacaca;
  letter-spacing: 1px;
  width: max-content;
`
