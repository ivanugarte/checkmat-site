import React, { Fragment } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import navNames from "./navNames.json";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white shadow fixed w-full z-[1010] relative"
    >
      {({ open, close }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex">
                <div className="navLogo flex flex-shrink-0 items-center">
                  <div className="relative block h-20 w-36">
                    <a href="/">
                    <Image
                      src="/img/logo1.png"
                      alt="Workflow"
                      layout="fill"
                      priority
                      objectFit="contain"
                    />
                  </a>
                    
                  </div>
                </div>
                <div className="lg:pl-18 navDesktopItems hidden pl-4 sm:ml-6 sm:flex md:space-x-4 md:pl-4 lg:space-x-8 xl:pl-32">
                  {navNames.map((navName) => (
                    <div
                      key={navName.id}
                      className="hidden sm:ml-6 sm:flex sm:space-x-8"
                    >
                      <Link href={navName.href} scroll={false}>
                        <a
                          className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium)
                              ? "border-indigo-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            }`}
                        >
                          {navName.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="absolute grow z-40 inline-flex items-center border-b-2 border-transparent px-1 top-3 right-0 hover:border-gray-300 hover:text-gray-700">
                  {/* <LanguageSelector /> */}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {navNames.map((navName) => (
              <div key={navName.id} className="pt-2 pb-4 space-y-1">
                <Disclosure.Button as={Fragment}>
                  <Link href={navName.href}>
                    <a
                      onClick={() => close()}
                      className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium 
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                        }`}
                    >
                      {navName.name}
                    </a>
                  </Link>
                </Disclosure.Button>
              </div>
            ))}
          </Disclosure.Panel>
        </>
  )
}
    </Disclosure >
  );
}