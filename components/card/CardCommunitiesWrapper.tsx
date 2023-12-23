import React from "react";
import CardCommunities from "./CardCommunities";
import { Skeleton } from "../ui/skeleton";
import { CommunityGroup } from "@/types/types";

export default async function CardCommunitiesWrapper() {
  const res = await fetch(
    "https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json"
  );
  const data: CommunityGroup[] = await res.json();

  return (
    <div className="flex flex-wrap justify-center items-center mx-8 md:mx-16 md:pt-4 pb-16 gap-4">
      {data.length === 0 ? (
        <>
          <Skeleton className="h-[300px] w-[300px]" />
          <Skeleton className="h-[300px] w-[300px]" />
          <Skeleton className="h-[300px] w-[300px]" />
          <Skeleton className="h-[300px] w-[300px]" />
          <Skeleton className="h-[300px] w-[300px]" />
          <Skeleton className="h-[300px] w-[300px]" />
        </>
      ) : (
        data.map((community) => (
          <CardCommunities key={community.id} community={community} />
        ))
      )}
    </div>
  );
}
