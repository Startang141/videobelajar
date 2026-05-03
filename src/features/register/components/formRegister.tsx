"use client";
import InputField from "@/src/components/InputField";
import PasswordField from "@/src/components/passwordInputField";
import Link from "next/link";
import { useState } from "react";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <div className="mt-9 mb-6 flex flex-col gap-4">
        <InputField
          label="Nama Lengkap"
          type="text"
          placeholder="Nama Lengkap"
          name="nama"
        />
        <InputField
          label="E-mail"
          type="email"
          placeholder="input email"
          name="email"
        />
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
        <PasswordField
          label="Kata Sandi"
          name="password"
          placeholder="Password"
          showPassword={showPassword}
          handleShow={handleShowPassword}
        />
        <PasswordField
          label="Konfirmasi Kata Sandi"
          name="passwordConfirmation"
          placeholder="Konfirmasi Password"
          showPassword={showConfirmPassword}
          handleShow={handleShowConfirmPassword}
        />
        <Link href="#" className="text-right block mt-2">
          Lupa Password?
        </Link>
      </div>
    </>
  );
};

export default FormRegister;
