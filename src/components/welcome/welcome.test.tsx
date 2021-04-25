import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"
import { Welcome } from "./welcome.component"

describe("<Title /> component", () => {
  test("Check initial render", () => {
    const { getByTestId } = render(<Welcome />)

    expect(getByTestId("welcome-content")).toBeInTheDocument()
    expect(getByTestId("welcome-logo")).toBeInTheDocument()
    expect(getByTestId("welcome-title")).toBeInTheDocument()
    expect(getByTestId("welcome-title")).toHaveTextContent("CN REACT STARTER")
    expect(getByTestId("welcome-description")).toBeInTheDocument()
    expect(getByTestId("welcome-description")).toHaveTextContent("Opinated CRA template")
  })
})
