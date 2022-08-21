import Image from "next/image";

export default function Flags() {
  return (
    <div className="grid-rows-{6} grid grid-rows-3 grid-flow-col gap-4" >
    {/* <div className="text-center relative mr-12 mt-12"> */}
      <div className="flex space-between ml-52 ">
        {/* <div className="flex space-between flex-row-reverse"> */}
        {/* <div className="flex-initial w-32 relative h-20"> */}
        <div className="flex-initial w-52 relative">  
          <Image
            src={"/img/rey.jfif"}
            layout="fill"
            objectFit="contain"
            priority
            alt="Gran Bretaña flag"
          />
        </div>
        <div className="flex-initial w-52 relative h-36">
          <Image
            src={"/img/logo2g.png"}
            layout="fill"
            objectFit="contain"
            priority
            alt="España flag"
          />
        </div>
        <div className="flex-initial w-52 relative h-36">
          <Image
            src={"/img/logoSantaCruz.jpg"}
            layout="fill"
            objectFit="contain"
            priority
            alt="España flag"
          />
        </div>
        <div className=" flex-initial w-48 relative h-36 rounded-full">
          <Image
            src={"/img/logoWarmachine.jfif"}
            layout="fill"
            objectFit="contain"
            priority
            alt="Brasil flag"
          />
        </div>
        <div className="flex-initial w-52 relative h-36">
          <Image
            src={"/img/logougarte.jpg"}
            layout="fill"
            objectFit="contain"
            alt="Brasil flag"
          />
        </div>
        <div className="flex-initial w-52 relative h-36">
          <Image
            src={"/img/logoRatitas.jfif"}
            layout="fill"
            objectFit="contain"
            priority
            alt="Brasil flag"
          />
        </div>

        {/* <div className="flex-initial w-32 relative h-16">
          <i className="arrow-right ml-4"></i>
        </div>
        <div className="flex-initial w-32 relative h-16">
          <small>Portafolio Rendah</small>
        </div> */}
      </div>
    </div>
  );
}
