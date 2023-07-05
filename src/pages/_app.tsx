import { primaryTheme } from '@/Themes/primary-theme'
import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={primaryTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )

}
