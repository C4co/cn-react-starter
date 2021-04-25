import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  color: ${({theme}) => theme.FONT_TITLE};
  font-size: 1.5em;
  margin-bottom: 15px;
  text-align: center;
`

export const Description = styled.p`
  text-align: center;
  font-size: 1.1em;
  color: ${({theme}) => theme.FONT_TEXT};
  margin-bottom: 15px;
  text-align: center;
`

export const Logo = styled.img`
  max-width: 100px;
  width: 100%;
  margin-bottom: 40px;
`

export const Install = styled.div`
  text-align: center;
  color: ${({theme}) => theme.PRIMARY};
  border-radius: 3px;
  font-size: 1.2em;
  margin-bottom: 30px;
`

export const Github = styled.a`
  font-size: 60px;
  color: ${({theme}) => theme.FONT_TITLE};
  line-height: 0;
`
