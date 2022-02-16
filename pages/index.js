import Head from 'next/head'
import { useRouter } from 'next/router'

function Home() {
    const router =useRouter()

    const handleClick = (e) => {
        e.preventDefault() 
        router.push('/pokemon')
    }

    return(
    <>
    <Head>
        <title>G's exploration of Next.js from first principles</title>
        <meta name="viewport" content= "initial-scale=1.0, width=device-width"/>

    </Head>

    <div> Welcome dear future friend! </div>

    <button onClick={handleClick}>
        Click for awesomeness!
    </button>
    </>
    )
}

export default Home