import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-full min-h-[200px] w-full md:min-h-[400px]">
      <Image
        src="/images/img_hero.jpg"
        alt="Hero image"
        width={400}
        height={400}
        className="h-[200px] w-full object-cover md:h-full"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-lg font-semibold text-white md:text-5xl">
        Unlock the Full Potential of Home Buyer Insights
      </h1>
    </div>
  );
}
