import Image from "next/image";
import { FC } from "react";

interface CardProps {
  thumbImage: string;
  personImage: string;
}

const Card: FC<CardProps> = ({ thumbImage, personImage }) => {
  return (
    <>
      <div className="border border-gray-400 rounded-lg md:p-5 p-4 inline-flex flex-col md:gap-4 gap-2 bg-white">
        <div className="flex flex-row md:flex-col gap-3 md:gap-4">
          <Image
            src={thumbImage}
            alt=""
            width={82}
            height={82}
            className=" md:w-full md:h-full rounded-lg object-cover"
          />
          <div className="flex flex-col gap-4 ">
            <div className="font-poppins flex flex-col md:gap-2">
              <h3 className="text-lg font-semibold leading-none">
                Big 4 Auditor Financial Analyst
              </h3>
              <p className="text-md font-medium text-gray-500 hidden md:block">
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan kurikulum terbaik
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
                <h4 className="text-md font-medium">Jenna Ortega</h4>
                <p className="text-sm text-gray-400">
                  Senior Accountant di <span className="font-bold">Gojek</span>
                </p>
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
            <p className="text-gray-400 text-xs md:text-md">3.5 (86)</p>
          </div>
          <h3 className="font-semibold text-xl md:text-2xl text-green-600">
            Rp 300K
          </h3>
        </div>
      </div>
    </>
  );
};

export default Card;
