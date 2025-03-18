"use server";

import { mainBannerType } from "@/types/ResponseDataTypes";

export async function getBannerData(): Promise<mainBannerType[]> {
  const response = await fetch("/api/main-banner");
  if (!response.ok) {
    throw new Error("에에에에에러");
  }
  const data = (await response.json()) as mainBannerType[];
  return data;
}
