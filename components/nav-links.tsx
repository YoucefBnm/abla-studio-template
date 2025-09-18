import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";

const NAV_LINKS = [
    {
        label: 'About',
        href: '/'
    },
    {
        label: 'Services',
        href: '/'
    },
    {
        label: 'Work',
        href: '/'
    },
]

export function NavLinks ({className,...props}: React.ComponentProps<'ul'>) {

    return (
        <ul className={cn('flex gap-4', className)} {...props}>
            {
                NAV_LINKS.map((link) => (
                    <li key={link.label}>
                        <Link className="text-foreground/80 hover:text-foreground font-semibold uppercase text-sm" href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }

            <Button className="rounded-none font-semibold uppercase" variant={'secondary'}>Contact us</Button>
        </ul>
    )

}