import { BrowserRouter } from 'react-router-dom'
import { AuthRouter } from '../router/AuthRouter'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GilroyExtraBold from '../fonts/Gilroy-ExtraBold.otf'
import GilroyExtraLight from '../fonts/Gilroy-Light.otf'

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
  @font-face {
  font-family: 'Gilroy';
  src: url(${GilroyExtraBold}) format('otf'),
       url(${GilroyExtraLight}) format('otf');
  }

  body {
    color: ${props => (props.$whiteColor ? 'white' : 'black')};
    font-family: ${props => props.theme.fontFamily};
  }
`

const theme = {}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AuthRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
