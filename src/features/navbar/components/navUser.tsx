"use client";

import Button from "@/src/components/Button";
import { useAuth } from "@/src/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavUser = () => {
  const { isLogin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center ">
        <Link href="#">
          <p className="text-gray-400 font-medium text-lg hidden md:block mr-4 hover:text-gray-600">
            Kategori
          </p>
        </Link>
        {isLogin ? (
          <Image
            src="https://i.pravatar.cc/300?img=12"
            alt=""
            width={44}
            height={44}
            className="rounded-lg hidden md:block"
          />
        ) : (
          <div className="md:flex flex-row items-center gap-2 hidden">
            <Button
              href="/login"
              name="Login"
              className="text-white bg-green-600 hover:bg-green-700 px-4"
            />
            <Button
              name="Register"
              className="bg-white text-green-600 hover:bg-green-100 border-green-600 border px-4"
            />
          </div>
        )}

        {/* trigger hamburger */}
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src={!isOpen ? "/Dehaze.svg" : "/x.svg"}
              alt=""
              width={44}
              height={44}
              className={`block md:hidden`}
            />
          </button>
          <div
            className={`absolute z-99 right-0 top-14 bg-white shadow-md w-96 border border-gray-500 rounded-md ${isOpen ? `block` : `hidden`}`}
          >
            <div className="flex flex-col justify-between p-2 gap-4">
              <div className="flex-row gap-9 items-center flex justify-between">
                <p className="text-gray-400 font-medium text-lg">Kategori</p>
                {isLogin && (
                  <Image
                    src="https://i.pravatar.cc/300?img=12"
                    alt=""
                    width={44}
                    height={44}
                    className="rounded-lg"
                  />
                )}
              </div>
              {!isLogin && (
                <div className="flex flex-row items-center gap-2">
                  <Button
                    href="/login"
                    name="Login"
                    className="text-white bg-green-600 hover:bg-green-700 w-full"
                  />
                  <Button
                    name="Register"
                    className="bg-white text-green-600 hover:bg-green-100 w-full border-green-600 border"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavUser;
