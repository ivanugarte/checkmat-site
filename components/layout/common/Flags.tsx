import Image from "next/image";

export default function Flags() {
  return (
    <div className="text-center relative mr-12 mt-12 wrap">
      <div className="flex space-between flex-row-reverse">
        <div className="flex-initial w-32 relative h-16">
          <Image
            src={"/img/gb_flag.png"}
            layout="fill"
            objectFit="contain"
            priority
            alt="Gran Bretaña flag"
          />
        </div>
        <div className="flex-initial w-32 relative h-16">
          <Image
            src={"/img/es_flag.png"}
            layout="fill"
            objectFit="contain"
            priority
            alt="España flag"
          />
        </div>
        <div className="flex-initial w-32 relative h-16">
          <Image
            src={"/img/br_flag.png"}
            layout="fill"
            objectFit="contain"
            priority
            alt="Brasil flag"
          />
        </div>
        <div className="flex-initial w-32 relative h-16">
          <i className="arrow-right ml-4"></i>
        </div>
        <div className="flex-initial w-32 relative h-16">
          <small>Portafolio Rendah</small>
        </div>
      </div>
    </div>
  );
}
