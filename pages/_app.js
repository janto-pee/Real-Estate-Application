import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../Components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>

  )
}

export default MyApp
