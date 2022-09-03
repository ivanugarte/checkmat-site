import Image from "next/image";
import { Layout } from "../components/LayoutTeacher";


export default function Teacher() {
  return (
    <Layout>
      <div>
        <a className="relative block bg-white group" href="">
          <Image
            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-95 group-hover:opacity-50"
            src="/img/logoWarmachine.jfif"
            layout='fill' objectFit="contain"
            alt=""
          />
          <div className="relative p-8">
            {/* <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Developer
          </p> */}
            <div className="mt-64">
              <div
                className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
              >
                <strong>    <p className="text-sm text-black text-center font-mono text-2xl">
                  Profesor Fernando Ramirez Faixa MArron en Brazilian Jiu-jitsu.
                </p></strong>
              </div>
            </div>
          </div>
        </a>
      </div>

      <aside className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-xl mx-auto text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Feña War Machine
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe illum molestias soluta harum, modi temporibus culpa ab adipisci quidem.
            </p>
            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                 Mas de Fernando Ramirez
              </a>
            </div>
          </div>
        </div>

        <Image
          className="object-cover w-full h-56 sm:h-full"
          alt="#"
          src="/img/fefe.jpg"
          layout='fill'
          objectFit="contain"
        />
      </aside>



    </Layout>
  )
}