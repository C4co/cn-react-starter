import styled from "styled-components"

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`

interface BasicPageProps {
  children: any
}

export function BasicPage(props: BasicPageProps) {
  return(
    <Center>
      {props.children}
    </Center>
  )
}
