"use client";

import Button from "@/src/components/Button";
import { useAuth } from "@/src/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavUser = () => {
  const { userLogin, handleLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center ">
        <Link href="#">
          <p className="text-gray-400 font-medium text-lg hidden md:block mr-4 hover:text-gray-600">
            Kategori
          </p>
        </Link>
        {userLogin ? (
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setNavOpen(true)}
            onMouseLeave={() => setNavOpen(false)}
          >
            <Image
              src={userLogin.profile}
              alt="Profile"
              width={44}
              height={44}
              className="rounded-lg cursor-pointer"
            />
            <div
              className={`absolute z-99 right-0 top-11 bg-white shadow-md w-80 border border-gray-500 rounded-md ${
                navOpen ? `block` : `hidden`
              }`}
            >
              <div className="flex flex-col justify-between p-2 gap-4">
                {userLogin && (
                  <div
                    onClick={() => {
                      setNavOpen(false);
                      handleLogout();
                    }}
                  >
                    <Button
                      name="Log Out"
                      className="bg-white text-red-600 hover:bg-red-100 border px-4 w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="md:flex flex-row items-center gap-2 hidden">
            <Button
              href="/login"
              name="Login"
              className="text-white bg-green-600 hover:bg-green-700 px-4"
            />
            <Button
              href="/register"
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
            className={`absolute z-99 right-0 top-14 bg-white shadow-md w-96 border border-gray-500 rounded-md ${
              isOpen ? `block` : `hidden`
            }`}
          >
            <div className="flex flex-col justify-between p-2 gap-4">
              <div className="flex-row gap-9 items-center flex justify-between">
                <p className="text-gray-400 font-medium text-lg">Kategori</p>
                {userLogin && (
                  <Image
                    src={userLogin.profile}
                    alt="Profile"
                    width={44}
                    height={44}
                    className="rounded-lg"
                  />
                )}
              </div>
              {userLogin && (
                <div
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  <Button
                    name="Log Out"
                    className="bg-white text-red-600 hover:bg-red-100 border px-4 w-full"
                  />
                </div>
              )}
              {!userLogin && (
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
