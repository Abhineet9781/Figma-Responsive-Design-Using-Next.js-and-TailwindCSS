import Banner from "@/components/Banner";
import ShopByBrand from "@/components/ShopByBrand";
import ShopByCategory from "@/components/ShopByCategory";
import StyleMeetClarity from "@/components/StyleMeetClarity";
import UnrivalledExcellence from "@/components/UnrivalledExcellence";
import WearTheTrend from "@/components/WearTheTrend";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <ShopByCategory/>
        <WearTheTrend/>
        <ShopByBrand/>
        <UnrivalledExcellence/>
        <StyleMeetClarity/>
      </div>
    </>
  );
}
