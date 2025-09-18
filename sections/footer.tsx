import { Logo } from "@/components/logo";
import Link from "next/link";

const FOOTER_LINKS = [
    {
        title: 'Company',
        links: [
            { title: 'About', href: '#' },
            { title: 'Blog', href: '#' },
            { title: 'Careers', href: '#' },
            { title: 'Contact', href: '#' },
        ],
    },
    {
        title: 'Services',
        links: [
            { title: 'Web Design', href: '#' },
            { title: 'Branding', href: '#' },
            { title: 'Illustration', href: '#' },
            { title: 'Photography', href: '#' },
            { title: 'Videography', href: '#' },
            { title: 'Graphic Design', href: '#' },
            { title: 'UI/UX Design', href: '#' },
            { title: 'Motion Design', href: '#' },
            { title: 'Development', href: '#' },
            { title: 'Marketing', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { title: 'Templates', href: '#' },
            { title: 'Tutorials', href: '#' },
            { title: 'Courses', href: '#' },
        ],
    },
    {
        title: 'Support',
        links: [
            { title: 'FAQ', href: '#' },
            { title: 'Contact', href: '#' },
        ],
    },
]

export function Footer () {
    return (
        <footer className="py-12 px-6 md:px-8 flex gap-12 items-start justify-evenly flex-wrap bg-foreground text-background">
            <Logo className="w-24" />

            <nav className="flex-1 flex justify-evenly items-start gap-6 flex-wrap">
                {FOOTER_LINKS.map(({ title, links }) => (
                    <div key={title} className="flex flex-col gap-2">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <ul className="flex flex-col gap-2">
                            {links.map(({ title, href }) => (
                                <li key={title}>
                                    <Link href={href} className="text-muted-foreground hover:text-background text-sm font-medium">{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </footer>
    )
}