import React from "react";
import Hero from "@/components/hero";
import CardCommunitiesWrapper from "@/components/card/CardCommunitiesWrapper";


export default function Home() {
  return (
    <div className="bg-[#D8DDDC] mt-20">
        <Hero />
        <CardCommunitiesWrapper />
    </div>
  );
}