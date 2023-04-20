import Link from "next/link";

function HomePage() {
    console.log("HeomPage Render")
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default HomePage;