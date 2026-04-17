"use client";

import Image from "next/image";
import { useState } from "react";

const NavUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex-row gap-9 items-center flex">
        <p className="text-gray-400 font-medium text-lg hidden md:block">
          Kategori
        </p>
        <div className="flex flex-col items-center">
          <Image
            src="https://i.pravatar.cc/300?img=12"
            alt=""
            width={44}
            height={44}
            className="rounded-lg hidden md:block"
          />
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src="/Dehaze.svg"
              alt=""
              width={44}
              height={44}
              className={`block md:hidden`}
            />
          </button>
        </div>
        <div
          className={`${
            isOpen ? `block` : `hidden`
          } w-screen h-screen absolute bg-gray-500/50 top-0 right-0 left-0 bottom-0`}
        >
          <div className="absolute h-screen w-1/2 right-0 top-0 bg-white border-l border-gray-400">
            <div className="mt-2.5 flex flex-row items-center justify-between px-5">
              <button onClick={() => setIsOpen(!isOpen)}>
                <Image
                  src="/x.svg"
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-lg"
                />
              </button>
              <div className="flex-row gap-9 items-center flex justify-center">
                <p className="text-gray-400 font-medium text-lg">Kategori</p>
                <Image
                  src="https://i.pravatar.cc/300?img=12"
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavUser;
