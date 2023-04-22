import Link from "next/link";
import Head from "next/head";

function HomePage() {
    console.log("HeomPage Render")
    return (
        <>
            <main>
                <h1>Main Page</h1>
                <ul>
                    <li>
                        <Link href="/posts/first-post">
                            First Post
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    )
}
export default HomePage;