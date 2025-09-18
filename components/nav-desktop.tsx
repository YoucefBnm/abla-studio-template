import { NavLinks } from "./nav-links"

export function NavDesktop () {
    return (
        <nav className="hidden md:flex justify-between items-center gap-4">
            <NavLinks className="flex-1 justify-center items-center" />
        </nav>
    )
}