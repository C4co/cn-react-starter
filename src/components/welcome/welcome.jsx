import styled from "styled-components"
import { COLORS } from "../../values"
import { ASSETS } from "../../values"
import { FaGithubAlt } from "react-icons/fa"

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  color: ${COLORS.PRIMARY};
  font-size: 1.5em;
  margin-bottom: 15px;
  text-align: center;
`

const Description = styled.p`
  text-align: center;
  font-size: 1.1em;
  color: ${COLORS.FONT};
  margin-bottom: 15px;
  text-align: center;
`

const Logo = styled.img`
  max-width: 100px;
  width: 100%;
  margin-bottom: 40px;
`

const Install = styled.div`
  text-align: center;
  color: ${COLORS.INFO};
  border-radius: 3px;
  font-size: 1.2em;
  margin-bottom: 30px;
`

const Github = styled.a`
  font-size: 60px;
  color: ${COLORS.PRIMARY};
  line-height: 0;
`

export function Welcome() {
  return (
    <Content data-testid="welcome-content">
      <Logo data-testid="welcome-logo" src={ASSETS.LOGO} alt="logo" />
      <Title data-testid="welcome-title"> CN REACT STARTER </Title>
      <Description data-testid="welcome-description"> Opinated CRA template </Description>
      <Install> npx create-react-app --template cn-starter </Install>
      <Github target="_blank" href="https://github.com/C4co/cn-react-starter">
        <FaGithubAlt/>
      </Github>
    </Content>
  )
}
