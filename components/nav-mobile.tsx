import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { NavLinks } from "./nav-links"

export function NavMobile () {
    return (
        <div className="block md:hidden">
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="font-semibold uppercase" variant={'ghost'}>
                        <MenuIcon /> Menu 
                    </Button>
                </PopoverTrigger>

                <PopoverContent side="bottom" className="w-60 mr-6">
                    <NavLinks className="flex-col items-start" />
                </PopoverContent>
            </Popover>
        </div>
    )
}