import { HomepageNavbar } from "@/components/homepage/HomepageNavbar";
import { HomepageHero } from "@/components/homepage/HomepageHero";
import { HomepageContent } from "@/components/homepage/HomepageContent";

const HomePage = () => {
  return (
    <div className="h-full ">
      <HomepageNavbar />
      <HomepageHero />
      <HomepageContent />
    </div>
  );
};

export default HomePage;
