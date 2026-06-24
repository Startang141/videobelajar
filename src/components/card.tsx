"use client";
import Image from "next/image";
import { FC } from "react";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

interface CardProps {
  thumbImage: string;
  personImage: string;
  title: string;
  description: string;
  personName: string;
  role: string;
  price: number;
  rating: number;
  totalReviews: number;
}

const Card: FC<CardProps> = ({
  thumbImage,
  personImage,
  title,
  description,
  personName,
  role,
  price,
  rating,
  totalReviews,
}) => {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `Rp ${(price / 1000000).toFixed(1)}jt`;
    }
    if (price >= 100000) {
      return `Rp ${price / 1000}K`;
    }
    return `Rp ${price}`;
  };

  const { userLogin } = useAuth();
  return (
    <>
      <div className="border border-gray-400 rounded-lg md:p-5 p-4 inline-flex flex-col justify-between md:gap-4 gap-2 bg-white">
        <div className="flex flex-row md:flex-col gap-3 md:gap-4">
          <Image
            src={thumbImage}
            alt=""
            width={82}
            height={82}
            className=" md:w-full md:h-full rounded-lg object-cover"
          />
          <div className="flex flex-col gap-4">
            <div className="font-poppins flex flex-col md:gap-2">
              <h3 className="text-lg font-semibold leading-none">{title}</h3>
              <p className="text-md font-medium text-gray-500 hidden md:block">
                {description}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={personImage}
                alt=""
                width={44}
                height={40}
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-md font-medium">{personName}</h4>
                <p className="text-sm text-gray-400">{role}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row">
              <Image src="/FullStar.svg" alt="" width={18} height={18} />
              <Image src="/FullStar.svg" alt="" width={18} height={18} />
              <Image src="/HalfStar.svg" alt="" width={18} height={18} />
              <Image src="/EmptyStar.svg" alt="" width={18} height={18} />
              <Image src="/EmptyStar.svg" alt="" width={18} height={18} />
            </div>
            <p className="text-gray-400 text-xs md:text-md">
              {rating} ({totalReviews})
            </p>
          </div>
          <h3 className="font-semibold text-xl md:text-2xl text-green-600">
            {formatPrice(price)}
          </h3>
        </div>
        {userLogin?.role === "Admin" && (
          <div className="flex gap-2 flex-row justify-between">
            <Button
              type="button"
              src="/eye.svg"
              className="bg-amber-600 hover:bg-amber-700 py-2.5 px-6 rounded-md text-sm text-white mt-8 w-full mx-auto"
            />
            <Button
              type="button"
              src="/pencil.svg"
              className="bg-blue-600 hover:bg-blue-700 py-2.5 px-6 rounded-md text-sm text-white mt-8 w-full mx-auto"
            />
            <Button
              type="button"
              src="/trash.svg"
              className="bg-red-600 hover:bg-red-700 py-2.5 px-6 rounded-md text-sm text-white mt-8 w-full mx-auto"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
