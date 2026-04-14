"use client";
import Link from "next/link";
import { useState } from "react";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="mt-9 mb-6 flex flex-col gap-4">
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
          <label htmlFor="password" className="text-md text-slate-700">
            Password <span className="text-red-600">*</span>
          </label>
          <div className="border flex justify-between w-full rounded-md border-gray-400 px-3 py-2.5 text-md focus-within:border-green-600 focus-within:outline focus-within:outline-green-600">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="outline-0 flex-1 focus:outline-none focus:border-0"
            />
            <button type="button" onClick={handleShow}>
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
        <Link href="#" className="text-right block mt-2">
          Lupa Password?
        </Link>
      </div>
    </>
  );
};

export default FormLogin;
