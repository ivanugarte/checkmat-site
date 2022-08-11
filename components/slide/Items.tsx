import Image from "next/image";

export const Item1 = () => {
  return (
    <Image
      src="/img/A_Rendah_00.png"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};

export const Item2 = () => {
  return (
    <Image
      src="/img/A_Rendah_01.png"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};

export const Item3 = () => {
  return (
    <Image
      src="/img/A_Rendah_02.png"
      layout="fill"
      objectFit="contain"
      priority
      alt=""
    />
  );
};

const Items = [Item1, Item2, Item3];
export default Items;
