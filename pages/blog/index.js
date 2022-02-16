import Head from 'next/head'
import Link from 'next/link'

function Home() {

    return(
    <>
    <Head>
        <title>Blog exploration of Next.js from first principles</title>
        <meta name="viewport" content= "initial-scale=1.0, width=device-width"/>

    </Head>

    <div> Welcome Blog friend! </div>
    <Link href="/">
        <a>Go Back Home</a>
    </Link>
    </>
    )
}

export default Home