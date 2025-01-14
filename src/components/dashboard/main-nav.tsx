import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const getLinkClasses = (path: string) =>
    cn(
      "text-sm font-medium transition-colors hover:text-primary",
      pathname === path ? "text-primary" : "text-muted-foreground"
    );

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link href="/app/dashboard" className={getLinkClasses("/app/dashboard")}>
        Dashboard
      </Link>
    </nav>
  )
}
