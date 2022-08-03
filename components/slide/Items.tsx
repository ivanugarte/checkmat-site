import Image from "next/image";
import Link from "next/link";
// import { useTranslation } from "next-i18next";

export const Item1 = () => {
  // const { t } = useTranslation("common")
  return (
    <div className="relative overflow-hidden bg-white lg:h-5/6">
      <div className="mx-auto max-w-7xl h-full">
        <div className="relative z-10 bg-white lg:w-full lg:max-w-2xl h-full pb-8 sm:pb-16 md:pb-20 lg:pb-0">
          {/* <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          {/* <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div> */}

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block font-display font-normal">
                  {
                    "Speed up your"
                  }
                </span>
                <span className="block font-extrabold text-red-600 font-sans">
                  {"entrepreneurship"}💛
                </span>
                <span className="block font-display font-normal">
                  {"digitize your business"}
                </span>
              </h1> */}
              {/* <p className="mt-3 text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0  font-sans">
                <strong className="font-semibold text-gray-700">
                  {"Systems and websites"}
                </strong>{" "}
                {"for every entrepreneur, landing page, service page, self-managed sites, e-commerce and much more."}
              </p> */}
              {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="#projects">
                    <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 px-8 py-3 text-base font-medium text-white hover:bg-slate-700 md:py-4 md:px-10 md:text-lg">
                      {"See projects"}
                    </a>
                  </Link>
                </div>
              </div> */}
            </div>
          </main>
        </div>
      </div>
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96 lg:h-full">
        {/* slide-01 https://unsplash.com/photos/pl9DrjAMV6I LICENCE */}
        <Image
          className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="/img/A_Rendah_01.png"
          layout="fill"
          priority
          alt=""
        />
      </div>
    </div>
  );
};


export const Item2 = () => {
  // const { t } = useTranslation("common")
  return (
    <div className="relative overflow-hidden bg-white lg:h-5/6">
      <div className="mx-auto max-w-7xl h-full">
        <div className="relative z-10 bg-white lg:w-full lg:max-w-2xl h-full pb-8 sm:pb-16 md:pb-20 lg:pb-0">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block font-display font-normal">
                  {
                    "Speed up your"
                  }
                </span>
                <span className="block font-extrabold text-red-600 font-sans">
                  {"entrepreneurship"}💛
                </span>
                <span className="block font-display font-normal">
                  {"digitize your business"}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0  font-sans">
                <strong className="font-semibold text-gray-700">
                  {"Systems and websites"}
                </strong>{" "}
                {"for every entrepreneur, landing page, service page, self-managed sites, e-commerce and much more."}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="#projects">
                    <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 px-8 py-3 text-base font-medium text-white hover:bg-slate-700 md:py-4 md:px-10 md:text-lg">
                      {"See projects"}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96 lg:h-full">
        {/* slide-01 https://unsplash.com/photos/pl9DrjAMV6I LICENCE */}
        <Image
          className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="/img/A_Rendah_04_roxana.png"
          layout="fill"
          priority
          alt=""
        />
      </div>
    </div>
  );
};

export const Item3 = () => {
  // const { t } = useTranslation("common")
  return (
    <div className="relative overflow-hidden bg-white lg:h-5/6">
      <div className="mx-auto max-w-7xl h-full">
        <div className="relative z-10 bg-white lg:w-full lg:max-w-2xl h-full pb-8 sm:pb-16 md:pb-20 lg:pb-0">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative px-4 pt-6 sm:px-6 lg:px-8"></div>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block font-display font-normal">
                  {
                    "Speed up your"
                  }
                </span>
                <span className="block font-extrabold text-red-600 font-sans">
                  {"entrepreneurship"}💛
                </span>
                <span className="block font-display font-normal">
                  {"digitize your business"}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0  font-sans">
                <strong className="font-semibold text-gray-700">
                  {"Systems and websites"}
                </strong>{" "}
                {"for every entrepreneur, landing page, service page, self-managed sites, e-commerce and much more."}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="#projects">
                    <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 px-8 py-3 text-base font-medium text-white hover:bg-slate-700 md:py-4 md:px-10 md:text-lg">
                      {"See projects"}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96 lg:h-full">
        {/* slide-01 https://unsplash.com/photos/pl9DrjAMV6I LICENCE */}
        <Image
          className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="/img/A_Rendah_02.png"
          layout="fill"
          priority
          alt=""
        />
      </div>
    </div>
  );
};

const Items = [Item1, Item2, Item3];
export default Items;
