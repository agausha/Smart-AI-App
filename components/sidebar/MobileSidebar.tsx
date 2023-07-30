"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet/Sheet";
import { Sidebar } from "@/components/sidebar/Sidebar";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  apiLimitCount = 0,
  isPro = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};
