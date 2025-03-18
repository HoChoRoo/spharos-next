import { mainBannerType } from "@/types/ResponseDataTypes";
import React from "react";

export default function MainBannerSection({
  bannerData,
}: {
  bannerData: mainBannerType[];
}) {
  return (
    <div>
      {bannerData.map((banner) => (
        <div key={banner.id}></div>
      ))}
    </div>
  );
}
