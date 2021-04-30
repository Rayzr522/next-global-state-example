import '../styles/globals.css'
import { GlobalStoreProvider } from '../lib/global-store'

function MyApp({ Component, pageProps }) {
    return <GlobalStoreProvider>
        <Component {...pageProps} />
    </GlobalStoreProvider>
}

export default MyApp
