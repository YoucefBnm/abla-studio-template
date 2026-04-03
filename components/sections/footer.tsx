import { Logo } from "@/components/logo";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground p-8 space-y-4">
      <div className="font-medium text-muted-foreground">
        &copy; - Abla studio for design and development - 2026 created with{" "}
        <a
          className="text-foreground underline"
          rel="noreferrer noopener"
          href="https://systaliko-ui.vercel.app/"
          target="_blank"
        >
          Systaliko UI
        </a>
      </div>

      <div className="flex gap-2 ">
        <Button variant={"link"}>Linkedin</Button>
        <Button variant={"link"}>Instagram</Button>
        <Button variant={"link"}>X</Button>
        <Button variant={"link"}>Behance</Button>
        <Button variant={"link"}>Dribbble</Button>
      </div>
    </footer>
  );
}
