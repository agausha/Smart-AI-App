import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "@/components/sidebar/MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
