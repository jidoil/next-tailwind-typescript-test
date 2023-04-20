import NavBar from "../components/NavBar";
import '../styles/globals.css'
import Head from "next/head";

function App({ Component, pageProps }) {
    console.log('App Render')
    return (
        <>
            <Head>
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    );
}

export default App;