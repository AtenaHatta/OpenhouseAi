import React from "react";
import Image from "next/image";
import { AiOutlineDollar } from "react-icons/ai";
import { FaHouseChimney } from "react-icons/fa6";
import { BiArea } from "react-icons/bi";
import { Homes } from "@/types/types";

type CardHomesProps = {
  homes: Homes;
};

export default function CardHomes({ homes }: CardHomesProps) {
  const getImageSrc = (type: string) => {
    switch (type) {
      case "House":
        return "/images/img_house.webp";
      case "Townhome":
        return "/images/img_townhome.webp";
      case "Condo":
        return "/images/img_condo.webp";
      case "Duplex":
        return "/images/img_duplex.webp";
      default:
        return "/images/img_noimage.webp";
    }
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-xl border-neutral-600">
      <div className="w-full h-400 relative rounded-t-lg overflow-hidden">
        <Image
          src={getImageSrc(homes.type)}
          alt="Description of image"
          width={400}
          height={400}
          className="h-[200px] w-[300px] object-fill"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-center items-center rounded-lg shadow-lg overflow-hidden w-[250px]">
          <div className="w-[100px] flex items-center justify-center bg-blue text-white text-sm font-medium py-2 px-4 space-x-1">
            <FaHouseChimney />
            <span>type</span>
          </div>
          <div className="w-[150px] flex items-center justify-start bg-gray-100 text-gray-800 text-sm font-semibold py-2 px-4">
            <span>{homes.type}</span>
          </div>
        </div>

        <div className="justify-center items-center  flex rounded-lg shadow-lg overflow-hidden w-[250px]">
          <div className="w-[100px] flex items-center justify-center bg-blue text-white text-sm font-medium py-2 px-4 space-x-1">
            <BiArea className="text-lg" />
            <span>area</span>
          </div>
          <div className="w-[150px] flex items-center justify-start bg-gray-100 text-gray-800 text-sm font-semibold py-2 px-4">
            <span>{`${homes.area} sq ft`}</span>
          </div>
        </div>

        <div className="flex justify-center items-center  rounded-lg shadow-lg overflow-hidden w-[250px]">
          <div className="w-[100px] flex items-center justify-center bg-blue text-white text-sm font-medium py-2 px-4 space-x-1">
            <AiOutlineDollar className="text-lg" />
            <span>price</span>
          </div>
          <div className="w-[150px] flex items-center justify-start bg-gray-100 text-gray-800 text-sm font-semibold py-2 px-4">
            <span>{formatPrice(homes.price)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
