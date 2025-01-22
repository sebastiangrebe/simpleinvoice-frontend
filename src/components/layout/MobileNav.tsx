import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const routes = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-lg font-medium hover:text-primary"
            >
              {route.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/signin"><Button>Get Started</Button></Link>
            {/* <Link href="/#waitlist"><Button>Get Started</Button></Link> */}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}