import Banner from "@/components/Banner";
import ShopByCategory from "@/components/ShopByCategory";
import WearTheTrend from "@/components/WearTheTrend";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <ShopByCategory/>
        <WearTheTrend/>
      </div>
    </>
  );
}
