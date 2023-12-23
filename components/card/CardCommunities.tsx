import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import Chip from "../chip";
import { FaLocationDot } from "react-icons/fa6";

const CardCommunities = ({ community }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-xl border-neutral-600 m-2">
      <div className="w-full h-400 relative rounded-t-lg overflow-hidden">
        <Image
          src={
            community.imgUrl.length > 0
              ? community.imgUrl
              : "/images/img_noimage.webp"
          }
          alt="Description of image"
          width={400}
          height={400}
          className="h-[200px] w-[300px] object-cover hover:scale-125 transition duration-500 ease-in-out"
        />
        <div className="absolute top-0 right-0 m-4">
          <Chip group={community.group} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-start items-center gap-1">
          <FaLocationDot className="text-lg" />
          <h5 className="text-xl font-bold tracking-tight text-gray-900">
            {community.name}
          </h5>
        </div>
        <div className="flex justify-end">
          <Button text="Check this area" href={`/houses/${community.id}/${community.name}/${community.group}`} />
        </div>
      </div>
    </div>
  );
};

export default CardCommunities;
