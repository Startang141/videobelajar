import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps {
  href?: string;
  name: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  src?: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ href, name, type, src, className }) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`text-md block rounded-md font-bold py-2.5 text-center cursor-pointer ${className}`}
      >
        {name}
      </Link>
    );
  }
  return (
    <div className="w-full">
      <button
        type={type}
        className={`${src ? `flex flex-row gap-2 justify-center` : `block`} text-md text-center rounded-md font-bold py-2.5 cursor-pointer ${className}`}
      >
        {src && <Image src={src} alt="" width={20} height={20} />}
        {name}
      </button>
    </div>
  );
};

export default Button;
