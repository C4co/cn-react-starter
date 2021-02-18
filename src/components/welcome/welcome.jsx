import styled from "styled-components"
import { COLORS } from "../../values"
import { ASSETS } from "../../values"

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  color: ${COLORS.PRIMARY};
  font-size: 2.4em;
  margin-bottom: 15px;
  font-weight: normal;
  text-align: center;
`

const Description = styled.p`
  text-align: center;
  font-size: 1.4em;
  color: ${COLORS.FONT};
  margin-bottom: 20px;
  text-align: center;
`

const Logo = styled.img`
  max-width: 120px;
  width: 100%;
  margin-bottom: 30px;
`

const Install = styled.div`
  background: #1f1f3d;
  text-align: center;
  color: #99ffcc;
  border-radius: 3px;
  font-size: 1.4em;
  padding: 12px 20px 17px 20px;
`

export function Welcome() {
  return (
    <Content data-testid="welcome-content">
      <Logo data-testid="welcome-logo" src={ASSETS.LOGO} alt="logo" />
      <Title data-testid="welcome-title"> CN React Starter </Title>
      <Description data-testid="welcome-description"> Opinated CRA template </Description>
      <Install> npx create-react-app --template cn-starter </Install>
    </Content>
  )
}
