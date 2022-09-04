import Image from "next/image";
import { Layout } from "../components/LayoutTeacher";
import React from "react";
import ReactPlayer from "react-player";
import { render } from "react-dom";

const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      '/img/logo2g.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      '/img/rt_01.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      '/img/santaCruz01.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      '/img/logo2g.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      '/img/rt_01.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      '/img/santaCruz01.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Video1 = () => (
  <div style={styles}>
    <ReactPlayer
      url="https://www.youtube.com/watch?v=JpvNqqKORqE&t=6s"
      playing={true}
      volume={1}
      width="50vw"
      height="50vh"
      onReady={() => console.log("ready now")}
    />
    {/* <h2>Start editing to see some magic happen {"\u2728"}</h2> */}
  </div>
);

const Video2 = () => (
  <div style={styles}>
    <ReactPlayer
      url="https://www.youtube.com/watch?v=dQZ-gee-Wmw"
      playing={true}
      volume={1}
      width="50vw"
      height="50vh"
      onReady={() => console.log("ready now")}
    />
    {/* <h2>Start editing to see some magic happen {"\u2728"}</h2> */}
  </div>
);



export default function Teacher() {
  return (
    <>
      <Layout>
        <div>
          <a className="relative block bg-white group" href="">
            <Image
              className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-95 group-hover:opacity-50"
              src="/img/logo2g.png"
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
                    Profesor Guilherme Ribeiro Faixa preta en Brazilian Jiu-jitsu.
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
                Guilherme Gigantinho 2G
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                Formado por Ricardo Vieira en Rio de Janeiro, la cuna del BJJ, con experiencia de 20 años como profesores
                y un vasto curriculo en competiciones.
              </p>
              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Vea mas de Guilherme Gigantinho
                </a>
              </div>
            </div>
          </div>

          <Image
            className="object-cover w-full h-56 sm:h-full"
            src="/img/2g_03.jpg"
            layout='fill'
            objectFit="contain"
            alt=""
          />
        </aside>
        <PhotoGalery />
        <Banner  />
        {/* <Video1 />
        <Video2 /> */}
      </Layout>
    </>
  )
}

function PhotoGalery() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight">Our Team</h2>
            <p className="text-xl text-gray-500">
              Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus
              quis et.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <Image className="" src={person.imageUrl}
                      alt=""
                      layout='fill'
                      objectFit="contain"
                      priority
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1 ml-32">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Banner() {
  return (
    <section className="relative bg-white">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="/img/2g_03.jpg"
        alt="Couple on a bed with a dog"
      />
      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-2xl font-extrabold sm:text-5xl">
          2G Jiu-jitsu
            <strong className="font-extrabold text-rose-700 sm:block">
              Guilherme Ribeiro
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            Checkmat Santiago - Chile
          </p>

          {/* <div className="flex flex-wrap mt-8 text-center gap-4">
            <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
              Get Started
            </a>

            <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
              Learn More
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}