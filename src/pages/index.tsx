import { NextPage } from "next";

import HomeLayout from "@/layouts/HomeLayout";
import { HomeHero } from "@/sections/Home";
import HomeAnalytics from "@/sections/Home/HomeAnalytics";
import HomeSummaryCard from "@/sections/Home/HomeSummaryCard";
import HomeSummaryContry from "@/sections/Home/HomeSummaryContry";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <main className="grid grid-cols-12 container mx-auto my-8 lg:gap-8">
        <div className="col-span-12 lg:col-span-9 ">
          <HomeHero />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <HomeAnalytics />
          <HomeSummaryCard eachValue={[4862, 2671, 3571]} />
          <HomeSummaryContry />
        </div>
      </main>
    </HomeLayout>
  );
};

export default Home;
