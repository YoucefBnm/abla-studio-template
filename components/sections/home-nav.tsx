"use client";
import { NavDesktop } from "@/components/nav-desktop";
import { NavMobile } from "@/components/nav-mobile";
import { Header } from "../systaliko-ui/header";
import { useIsMobile } from "@/hooks/use-mobile";

export function HomeNav() {
  const isMobile = useIsMobile();
  return (
    <Header
      toggleOnScroll
      className="fixed left-0 top-0 w-full h-18 flex items-center border-b border-b-border/50  z-999"
    >
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </Header>
  );
}
