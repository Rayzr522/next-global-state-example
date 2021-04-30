import Head from 'next/head'
import Link from 'next/link'
import { useGlobalStore } from '../lib/global-store'

export default function Home() {
    const { users } = useGlobalStore()

    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>
            <div>
                <p>
                    Welcome! Total users in the app: {Object.keys(users).length}
                </p>
            </div>
        </>
    )
}
