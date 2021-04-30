import '../styles/globals.css'
import { GlobalStoreProvider } from '../lib/global-store'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
    return <>
        <nav>
            <ul className="navbar">
                <li className="navbar-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link href="/users">Users</Link>
                </li>
            </ul>
        </nav>

        <main>
            <GlobalStoreProvider>
                <Component {...pageProps} />
            </GlobalStoreProvider>
        </main>
    </>
}

export default MyApp
