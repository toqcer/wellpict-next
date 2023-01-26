import { NextPage } from "next";

import HomeLayout from "@/layouts/HomeLayout";
import { HomeHero } from "@/sections/Home";
import HomeAnalytics from "@/sections/Home/HomeAnalytics";
import HomeSummaryCard from "@/sections/Home/HomeSummaryCard";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <main className="grid grid-cols-12 container mx-auto my-8 lg:gap-8">
        <div className="col-span-12 lg:col-span-9 ">
          <HomeHero />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <HomeAnalytics />
          <HomeSummaryCard />
        </div>
      </main>
    </HomeLayout>
  );
};

export default Home;
