import Image from "next/image";
import people from "./logos"

export default function Flags() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight text-center">Checkmat Jiu-Jitsu Chile</h2>
            <p className="text-xl text-gray-500 text-center">
              Abajo Usted puede navegar por las Sucursales de los profesores de Checkmat Chile.
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
                    <Image className="" src={person.imageUrl} alt="" layout='fill' objectFit="contain"
                      priority />
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