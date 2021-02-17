import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"
import { Title } from "./title"

describe("<Title /> component", () => {
  test("Check initial render", () => {
    const { baseElement } = render(<Title> hello world! </Title>)
    expect(baseElement).toBeInTheDocument()
    expect(baseElement).toHaveTextContent("hello world!")
  })
})
