import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"
import App from "./app"

test("renders learn react link", () => {
  const { baseElement } = render(<App />)

  expect(baseElement).toBeInTheDocument()
})
