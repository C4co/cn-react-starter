import { ASSETS } from "../../values"
import { FaGithubAlt } from "react-icons/fa"
import * as Style from "./welcome.style"

export function Welcome() {
  return (
    <Style.Content data-testid="welcome-content">
      <Style.Logo data-testid="welcome-logo" src={ASSETS.LOGO} alt="logo" />
      <Style.Title data-testid="welcome-title">
        CN REACT STARTER
      </Style.Title>
      <Style.Description data-testid="welcome-description">
        Opinated CRA template
      </Style.Description>
      <Style.Install>
        npx create-react-app --template cn-starter
      </Style.Install>
      <Style.Github target="_blank" href="https://github.com/C4co/cn-react-starter">
        <FaGithubAlt/>
      </Style.Github>
    </Style.Content>
  )
}
