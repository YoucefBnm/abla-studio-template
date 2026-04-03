import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./systaliko-ui/full-screen-navigation-menu";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { SERVICES } from "@/constants";

export function NavDesktop() {
  return (
    <NavigationMenu className="size-full px-12 flex items-center justify-between">
      <Link href="/">
        <Logo className="w-18" />
      </Link>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-wrap  gap-16 p-8 space-y-4">
            <ul className="flex justify-center items-center flex-wrap gap-8">
              {SERVICES.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                  Icon={service.icon}
                  className="md:w-xs"
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Work
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Button variant={"outline"}>Contact us</Button>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  Icon: React.ElementType;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink href={href}>
        <div className="flex gap-4 items-start">
          <Icon className="size-5" />
          <div className="flex-1 flex flex-col gap-2 ">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </div>
      </NavigationMenuLink>
    </li>
  );
}
