"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavFooter = () => {
  const [isShowCat, setShowCat] = useState(false);
  const [isShowComp, setShowComp] = useState(false);
  const [isShowComm, setShowComm] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 md:gap-12 mt-4 md:mt-0">
        <div>
          <div
            onClick={() => setShowCat(!isShowCat)}
            className="flex items-center justify-between"
          >
            <p className="font-bold text-md">Kategori</p>
            <Image
              src="/chevron-right.svg"
              alt=""
              width={20}
              height={20}
              className={`${isShowCat ? "rotate-90" : "rotate-0"} md:hidden`}
            />
          </div>
          <ul
            className={`${
              isShowCat ? `block` : `hidden`
            } mt-4 flex flex-col gap-3 md:block`}
          >
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Digital & Teknologi
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Pemasaran
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Manajemen Bisnis
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Pengembangan Diri
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div
            onClick={() => setShowComp(!isShowComp)}
            className="flex items-center justify-between"
          >
            <p className="font-bold text-md">Perusahaan</p>
            <Image
              src="/chevron-right.svg"
              alt=""
              width={20}
              height={20}
              className={`${isShowComp ? "rotate-90" : "rotate-0"} md:hidden`}
            />
          </div>
          <ul
            className={`${
              isShowComp ? `block` : `hidden`
            } mt-4 flex flex-col gap-3 md:block`}
          >
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Ketentuan Layanan
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Bantuan
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div
            onClick={() => setShowComm(!isShowComm)}
            className="flex items-center justify-between"
          >
            <p className="font-bold text-md">Komunitas</p>
            <Image
              src="/chevron-right.svg"
              alt=""
              width={20}
              height={20}
              className={`${isShowComm ? "rotate-90" : "rotate-0"} md:hidden`}
            />
          </div>
          <ul
            className={`${
              isShowComm ? `block` : `hidden`
            } mt-4 flex flex-col gap-3 md:block`}
          >
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Tips Sukses
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavFooter;
