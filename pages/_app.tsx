import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Common/Footer'

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>

  )

}

export default MyApp
