import Image from "next/image";
import { FC } from "react";

interface CardProps {
  thumbImage: string;
  personImage: string;
}

const Card: FC<CardProps> = ({ thumbImage, personImage }) => {
  return (
    <>
      <div className="border border-gray-400 rounded-lg p-5 inline-flex flex-col gap-4">
        <Image
          src={thumbImage}
          alt=""
          width={500}
          height={180}
          className="rounded-lg bg-cover"
        />
        <div className="font-poppins flex flex-col gap-2">
          <h3 className="text-lg font-semibold">
            Big 4 Auditor Financial Analyst
          </h3>
          <p className="text-md font-medium text-gray-500">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan kurikulum terbaik
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <Image
            src={personImage}
            alt=""
            width={44}
            height={40}
            className="rounded-lg object-cover"
          />
          <div>
            <h4 className="text-md font-medium">Jenna Ortega</h4>
            <p className="text-sm text-gray-400">
              Senior Accountant di <span className="font-bold">Gojek</span>
            </p>
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
            <p className="text-gray-400">3.5 (86)</p>
          </div>
          <h3 className="font-semibold text-2xl text-green-600">Rp 300K</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
