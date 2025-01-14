import { Button } from "@/components/ui/Button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const routes = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/#features" },
  { name: "Pricing", path: "/#pricing" },
];

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          {routes.map((route) => (
            <NavigationMenuItem key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}
              >
                {route.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Link href="/signin"><Button variant="ghost">Sign In</Button></Link>
        <Link href="/register"><Button>Get Started</Button></Link>
      </div>
    </div>
  );
}