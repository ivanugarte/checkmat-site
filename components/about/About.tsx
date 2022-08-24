import Image from "next/image";
import team from "./team.json";

export default function About() {

  return (
    <div className="bg-white min-h-screen" id="about">
      <div className="mx-auto py-12 pt-24 px-4 max-w-7xl sm:px-6 sm:pt-24 lg:px-8 lg:py-24 lg:pt-36">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl tracking-tight font-normal sm:text-4xl md:text-6xl text-gray-900 font-display">
              {"About Us"}
            </h2>
            <p className="text-xl text-gray-500">
              <strong className="text-black">DUweb</strong> {"We design, develop and manage your website or web system, be it corporate, institutional, catalog or online store. Our work codes, perseverance, dedication and vision focus on always understanding and interpreting the client's computing needs, proposing specific, parameterized and creative solutions that solve their problems."}
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {team.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-3 md:aspect-h-4">
                      {/* <Image
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
                        layout="fill"
                        priority
                        alt=""
                      /> */}
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium font-display space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg prose">
                          {/* <p className="text-gray-500">{person.bio}</p> */}
                          <blockquote className="text-gray-700 font-medium not-italic">
                            {person.bio}
                          </blockquote>
                        </div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a
                              href={person.linkedinUrl}
                              target="_SEJ"
                              rel="noreferrer"
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
