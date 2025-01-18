"use client";

import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

export const PageTitleAction = () => {
  return (
    <TooltipProvider>
      <Tooltip
        delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline" className="size-10" onClick={() => toast("This demo action isn't supposed to do anything.")}><PlusIcon className="size-5" /></Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add new</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
