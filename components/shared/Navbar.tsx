import Link from "next/link"
import Image from "next/image"
import { NavLinks } from "@/constant"
import AuthProvider from "../AuthProvider"

const Navbar = () => {
    const session = null

    return (
        <nav className="flexBetween navbar">
            <div className="flex flex-1 flex-start gap-10 items-center">
                <Link
                    href="/"
                >
                    <Image
                        src="/logo.svg"
                        alt="logo img"
                        height={43}
                        width={115}
                    />   
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        UserAvatar

                        <Link href="/create-project">
                            Share Work
                        </Link>
                    </>
                ) : (
                    <AuthProvider/>
                )}
            </div>
        </nav>
    )
}

export default Navbar