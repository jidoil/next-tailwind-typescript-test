import NavBar from "../components/NavBar";
import Head from "next/head";

function AboutPage() {
    console.log('About Render')
    return (
        <>
            <Head>
                <title>My title for about page</title>
                <meta name="description" value="This is my blog" />
            </Head>
            <main>
                <h1>About Page</h1>
            </main>
        </>
        );
}
export default AboutPage;