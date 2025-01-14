import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "@/components/ui/Button";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#integrations",
    label: "Integrations",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Logo />
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {/* <Link

                    href="/signin"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    Sign In
                  </Link> */}
                  {/* <Link

                    href="/register"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    Register
                  </Link> */}
                  <a

                    href="#waitlist"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    Join waitlist
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a

                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
          {/* <Link

              href="/signin"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              Sign In
            </Link> */}
            {/* <Link

              href="/register"
              className={`border ${buttonVariants({ variant: "default" })}`}
            >
              Register
            </Link> */}
            <a
              href="#waitlist"
              className={`w-[110px] border ${buttonVariants({
                variant: "default",
              })}`}
            >
              Join waitlist
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
