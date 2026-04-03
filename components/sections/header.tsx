import { Logo } from "@/components/logo";
import { NavDesktop } from "@/components/nav-desktop";
import { NavMobile } from "@/components/nav-mobile";
import Link from "next/link";

export function Header () {
    return (
        <header className="h-16 flex items-center justify-between px-8">
            <Link href="/">
                <Logo className="w-20" />
            </Link>

            <NavDesktop />
            <NavMobile />
        </header>
    )
}