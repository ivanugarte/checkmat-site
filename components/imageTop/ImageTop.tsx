import Image from "next/image";

export default function Imagetop() {
  return (
    <>
      <h1 className="pt-48">teste</h1>
      <Image
        className="object-none h-18 w-66"
        src={'/img/Slide_Incial_Home.png'}
        layout="fill"
        priority
        alt=""
      />
    </>
    // <div className={'image-container'}>
    //   <Image
    //     className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
    
    //     src={'/img/Slide_Incial_Home.png'} layout="fill" objectFit="cover"
    //     objectPosition="0 100%"
    //     priority
    //     alt=""
    //   />
    // </div>
  )
}