"use client";

import apiClient from "@/services/apiClient";
import { ChevronRightIcon, Loader, MoreVertical } from "lucide-react";
import { useState } from "react";
import { useUser } from "@/hooks/useUser"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";


export function UserMenu() {
  const user = useUser();
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="group flex w-full items-center justify-between gap-3 rounded-md px-4 py-2 text-surface-700 transition-colors hover:bg-surface-700/10 hover:text-surface-900 focus:outline-none focus-visible:bg-surface-900/5 focus-visible:text-surface-900 disabled:pointer-events-none"
        disabled={loading}
      >
        <>
          {loading ? (
            <div className="flex size-8 items-center justify-center rounded-full bg-surface-200/50">
              <Loader size="sm" className="size-5" />
            </div>
          ) : (
            <Avatar
              className="group-disabled:opacity-50"
            />
          )}

          <div className="text-start leading-5 group-disabled:opacity-50">
            <div className="max-w-[130px] truncate font-medium">
              {user.name}
            </div>
          </div>

          <MoreVertical
            size={16}
            className="ml-auto shrink-0 opacity-70 group-disabled:opacity-50"
            strokeWidth={1.5}
          />
        </>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[226px]">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={async () => {
              setLoading(true);
              try {
                await apiClient.post('auth/logout');
              } finally {
                localStorage.removeItem('access_token');
                window.location.href = '/';
              }
            }}
          >
            <>
              <span>Sign out</span>
              <ChevronRightIcon className="ml-auto" aria-hidden size="16" />
            </>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
