import { Button } from "./ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from "./systaliko-ui/animated-menu";

import { SERVICES } from "@/constants";
import { SportlightList } from "./spotlight-list";

export function NavMobile() {
  return (
    <div className="w-full px-8 flex justify-between items-center">
      <Link href="/">
        <Logo className="w-18" />
      </Link>
      <div className="flex gap-4 items-center">
        <Button variant={"outline"}>Contact us</Button>

        <AnimatedMenu className="relative">
          <AnimatedMenuButton className="w-[102px] h-[40px]">
            <AnimatedMenuButtonToggleIcon />
            <AnimatedMenuButtonLabel className="text-muted-foreground" />
          </AnimatedMenuButton>

          <AnimatedMenuList className="absolute right-0 top-0 border bg-background/80 backdrop-blur rounded-3xl">
            <div className="flex flex-col px-6 justify-evenly gap-6 items-start size-full">
              <SportlightList className="flex flex-col items-start gap-2 *:duration-300 ease-in-out">
                <AnimatedMenuItem order={0}>
                  <Link className="px-2 py-1.5" href="#">
                    About
                  </Link>
                </AnimatedMenuItem>

                {SERVICES.map((service, index) => (
                  <AnimatedMenuItem
                    className="px-2 py-1.5"
                    key={service.title}
                    order={index + 1}
                  >
                    <Link href={service.href}>{service.title}</Link>
                  </AnimatedMenuItem>
                ))}

                <AnimatedMenuItem order={SERVICES.length + 1}>
                  <Link className="px-2 py-1.5" href="#">
                    Work
                  </Link>
                </AnimatedMenuItem>
              </SportlightList>
            </div>
          </AnimatedMenuList>
        </AnimatedMenu>
      </div>
    </div>
  );
}
