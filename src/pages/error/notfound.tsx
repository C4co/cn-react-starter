import styled from "styled-components"
import { BasicPage } from "../../templates"

const Title = styled.h1`
  font-size: 3em;
  font-weight: normal;
`

export function NotFoundPage() {
  return (
    <BasicPage>
      <Title> Page not found </Title>
    </BasicPage>
  )
}
