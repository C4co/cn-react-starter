import { Routes } from "./router"
import { ThemeProvider } from "styled-components"
import { LIGHT_THEME } from "./theme"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={LIGHT_THEME}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
