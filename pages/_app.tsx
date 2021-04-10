import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import * as theme from '../styles/styles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Designo, portfolio"
          />    
          <meta name="author" content="MP" />
          <meta name="keywords" content="designo, designo portfolio, web developer" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
