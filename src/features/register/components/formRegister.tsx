"use client";
import Link from "next/link";
import { useState } from "react";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <div className="mt-9 mb-6 flex flex-col gap-4">
        <div>
          <label htmlFor="nama" className="text-md text-slate-700">
            Nama Lengkap <span className="text-red-600">*</span>
          </label>
          <input
            type="nama"
            name="nama"
            placeholder="Nama Lengkap"
            className="border block w-full rounded-md border-gray-400 px-3 py-2.5 text-md focus:border-green-600 focus:outline focus:outline-green-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-md text-slate-700">
            E-Mail <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border block w-full rounded-md border-gray-400 px-3 py-2.5 text-md focus:border-green-600 focus:outline focus:outline-green-600"
          />
        </div>
        <div>
          <label htmlFor="hp" className="text-md text-slate-700">
            No. Hp <span className="text-red-600">*</span>
          </label>
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
              <div className="p-1.5 border-r-0 bg-slate-100 rounded-tl-md rounded-bl-md border-gray-400 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z"
                    fill="#ea3323"
                  ></path>
                  <path
                    d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
              </div>
              <select
                name=""
                id=""
                className="border block py-[12.5px] px-1 text-md border-gray-400 rounded-tr-md rounded-br-md focus:border-green-600 focus:outline focus:outline-green-600"
              >
                <option value="+62">+62</option>
                <option value="+1">+1</option>
              </select>
            </div>
            <input
              type="hp"
              name="hp"
              placeholder="No. Hp"
              className="border flex-1 rounded-md border-gray-400 px-3 py-2.5 text-md focus:border-green-600 focus:outline focus:outline-green-600"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="text-md text-slate-700">
            Kata Sandi <span className="text-red-600">*</span>
          </label>
          <div className="border gap-2 flex items-center justify-between w-full rounded-md border-gray-400 px-3 py-2.5 text-md focus-within:border-green-600 focus-within:outline focus-within:outline-green-600">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="block w-full focus:outline-none focus:border-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye-icon lucide-eye text-gray-400"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye-off-icon lucide-eye-off text-gray-400"
                >
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                  <path d="m2 2 20 20" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <label
            htmlFor="passwordConfirmation"
            className="text-md text-slate-700"
          >
            Konfirmasi Kata Sandi <span className="text-red-600">*</span>
          </label>
          <div
            className="border flex justify-between gap-2 w-full rounded-md border-gray-400 px-3 py-2.5 text-md  focus-within:border-green-600
                  focus-within:outline-1
                  focus-within:outline-green-600"
          >
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="passwordConfirmation"
              placeholder="Konfirmasi Password"
              className="w-full focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-eye-icon lucide-eye text-gray-400"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-eye-off-icon lucide-eye-off text-gray-400"
                >
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                  <path d="m2 2 20 20" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <Link href="#" className="text-right block mt-2">
          Lupa Password?
        </Link>
      </div>
    </>
  );
};

export default FormRegister;
