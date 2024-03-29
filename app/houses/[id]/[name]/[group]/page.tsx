import CardHomes from "@/components/card/CardHomes";
import { CommunityGroup, Homes } from "@/types/types";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Average price of each area | OpenHouse.ai",
  description:
    "In addition to the average values for each area, we will also display the prices for each house, including their area and house type.",
};

export default async function page({
  params,
}: {
  params: { id: string; name: string; group: string };
}) {
  const res = await fetch(
    "https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json"
  );
  const data: Homes[] = await res.json();
  const community = data.filter(
    (community) => community.communityId === params.id
  );
  const resImg = await fetch(
    "https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json"
  );

  const dataImg: CommunityGroup[] = await resImg.json();
  const img = dataImg.filter((community) => community.id === params.id);
  const validImageUrl = img[0] && img[0].imgUrl && img[0].imgUrl !== "";

  let formattedAveragePrice = "No such a data";
  if (community.length > 0) {
    const averagePrice =
      community.reduce((acc, cur) => acc + cur.price, 0) / community.length;
    formattedAveragePrice = `$${averagePrice.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }

  return (
    <div className="mx-auto mt-20">
      <div className="relative h-full min-h-[200px] w-full md:min-h-[200px]">
        <Image
          src={validImageUrl ? img[0].imgUrl : "/images/img_noimagÏe.webp"}
          alt="Hero image"
          width={400}
          height={400}
          className="h-[200px] w-full object-cover md:h-[400px]"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="flex flex-col items-center justify-center space-y-2 ">
            <div className="flex items-center space-x-2">
              <FaLocationDot className="text-3xl md:text-4xl" />
              <h1 className="text-4xl font-medium md:text-5xl">
                {decodeURIComponent(params.name)}
              </h1>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold">
                Average price : {formattedAveragePrice}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {community.length > 0 && (
        <div className="mx-8 mt-8 flex flex-wrap items-center justify-center gap-8 pb-16 md:mx-16 md:pt-4">
          {community.map((homes: Homes) => (
            <CardHomes key={homes.id} homes={homes} />
          ))}
        </div>
      )}
    </div>
  );
}
