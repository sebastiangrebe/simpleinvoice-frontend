"use client";

import CompanySwitcher from "@/components/dashboard/company-switcher";
import { UserNav } from "@/components/dashboard/user-nav";
import { useAuth } from "@/hooks/useAuth";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const isAuthenticated = useAuth();

  // if (!isAuthenticated) {
  //   return <DashboardSkeleton />;
  // }

  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="ml-[10%] sm:ml-[20%]">
            <CompanySwitcher />
          </div>
          <div className="ml-auto mr-10 flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      {children}
      <Toaster />
    </div>
  );
}
