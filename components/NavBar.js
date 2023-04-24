import Link from "next/link";
import { Navbar } from "flowbite-react";

function NavBar() {
    return (

        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      BootCamps
    </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/about">
                    About
                </Navbar.Link>
                <Navbar.Link href="/camps">
                    부트캠프 코스
                </Navbar.Link>
                <Navbar.Link href="/makeNewCamp">
                    부트캠프 추가
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;