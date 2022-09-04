import Image from "next/image";
import Link from "next/link";

export const Item1 = () => {
  return (
    <Link href="/teacher">
    <a >
      <Image
        src="/img/pic6.jpg"
        layout="fill"
        objectFit="contain"
        priority
        alt=""
      />
    </a>
    </Link>
  );
};

// export const Item2 = () => {
//   return (
//     <Image
//       src="/img/unsplash5.jpg"
//       layout="fill"
//       objectFit="contain"
//       priority
//       alt=""
//     />
//   );
// };

export const Item3 = () => {
  return (
    <Image
      src="/img/pic4.jpg"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};

export const Item5 = () => {
  return (
    <Image
      src="/img/br_flag.svg"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};

export const Item6 = () => {
  return (
    <Image
      src="/img/2g_01.jpg"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};
export const Item7 = () => {
  return (
    <Image
      src="/img/2g_02.jpg"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};
export const Item8 = () => {
  return (
    <Image
      src="/img/wm_01.jfif"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};
export const Item9 = () => {
  return (
    <Image
      src="/img/rt_01.jpg"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};



const Items = [Item1, Item3, Item5, Item6, Item7, Item8, Item9];
export default Items;