import Link from "next/link";
import NavBar from "../components/NavBar";
import Head from "next/head";

function HomePage() {
    console.log("HeomPage Render")
    return (
        <>
            <Head>
                <title>My title</title>
                <meta name="description" value="This is my blog" />
            </Head>
            <main>
                <h1>Main Page</h1>
            </main>
        </>
    )
}
export default HomePage;