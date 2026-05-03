"use client";
import InputField from "@/src/components/InputField";
import PasswordField from "@/src/components/passwordInputField";
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
        <InputField
          label="E-mail"
          type="email"
          placeholder="Email"
          name="email"
        />
        <PasswordField
          label="Password"
          name="password"
          placeholder="Password"
          showPassword={showPassword}
          handleShow={handleShow}
        />
        <Link href="" className="text-right block mt-2">
          Lupa Password?
        </Link>
      </div>
    </>
  );
};

export default FormLogin;
