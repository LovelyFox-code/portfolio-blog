import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Common/Footer'
import CTAsection from '../components/CTAsection'

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    <Navbar />
    <Component {...pageProps} />
    <CTAsection />
    <Footer />
  </>

  )

}

export default MyApp
