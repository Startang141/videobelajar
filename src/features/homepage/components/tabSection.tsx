"use client";
import Card from "@/src/app/card";
import Link from "next/link";
import { useState } from "react";

const TabSection = () => {
  const [isActive, setIsActive] = useState("All");
  return (
    <>
      <div>
        <ul className="flex flex-row gap-8">
          <li className="flex flex-col" onClick={() => setIsActive("All")}>
            <Link
              href={""}
              className={`${
                isActive === "All" ? `text-[#F64920]` : `text-slate-500`
              } font-medium text-md py-3 tracking-wide `}
            >
              Semua Kelas
            </Link>
            <span
              className={`${
                isActive === "All" ? "block" : "hidden"
              } border-2 rounded-full w-12 text-[#F64920]`}
            ></span>
          </li>
          <li className="flex flex-col" onClick={() => setIsActive("Tab1")}>
            <Link
              href={""}
              className={`${
                isActive === "Tab1" ? `text-[#F64920]` : `text-slate-500`
              } font-medium text-md py-3 tracking-wide `}
            >
              Pemasaran
            </Link>
            <span
              className={`${
                isActive === "Tab1" ? "block" : "hidden"
              } border-2 rounded-full w-12 text-[#F64920]`}
            ></span>
          </li>
          <li className="flex flex-col" onClick={() => setIsActive("Tab2")}>
            <Link
              href={""}
              className={`${
                isActive === "Tab2" ? `text-[#F64920]` : `text-slate-500`
              } font-medium text-md py-3 tracking-wide `}
            >
              Desain
            </Link>
            <span
              className={`${
                isActive === "Tab2" ? "block" : "hidden"
              } border-2 rounded-full w-12 text-[#F64920]`}
            ></span>
          </li>
          <li className="flex flex-col" onClick={() => setIsActive("Tab3")}>
            <Link
              href={""}
              className={`${
                isActive === "Tab3" ? `text-[#F64920]` : `text-slate-500`
              } font-medium text-md py-3 tracking-wide `}
            >
              Pengembangan Diri
            </Link>
            <span
              className={`${
                isActive === "Tab3" ? "block" : "hidden"
              } border-2 rounded-full w-12 text-[#F64920]`}
            ></span>
          </li>
          <li className="flex flex-col" onClick={() => setIsActive("Tab4")}>
            <Link
              href={""}
              className={`${
                isActive === "Tab4" ? `text-[#F64920]` : `text-slate-500`
              } font-medium text-md py-3 tracking-wide `}
            >
              Bisnis
            </Link>
            <span
              className={`${
                isActive === "Tab4" ? "block" : "hidden"
              } border-2 rounded-full w-12 text-[#F64920]`}
            ></span>
          </li>
        </ul>
      </div>
      <div className="my-8">
        <div className={`${isActive == "All" ? `block` : `hidden`} `}>
          <div className="grid grid-cols-3 gap-6">
            <Card
              thumbImage="https://picsum.photos/500/300?random=1"
              personImage="https://i.pravatar.cc/300?img=1"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=2"
              personImage="https://i.pravatar.cc/300?img=2"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=3"
              personImage="https://i.pravatar.cc/300?img=3"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=4"
              personImage="https://i.pravatar.cc/300?img=4"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=5"
              personImage="https://i.pravatar.cc/300?img=5"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=6"
              personImage="https://i.pravatar.cc/300?img=6"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=7"
              personImage="https://i.pravatar.cc/300?img=7"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=8"
              personImage="https://i.pravatar.cc/300?img=8"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=9"
              personImage="https://i.pravatar.cc/300?img=9"
            ></Card>
          </div>
        </div>
        <div className={`${isActive == "Tab1" ? `block` : `hidden`} mt-8`}>
          <div className="grid grid-cols-3 gap-6">
            <Card
              thumbImage="https://picsum.photos/500/300?random=9"
              personImage="https://i.pravatar.cc/300?img=9"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=7"
              personImage="https://i.pravatar.cc/300?img=7"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=1"
              personImage="https://i.pravatar.cc/300?img=1"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=3"
              personImage="https://i.pravatar.cc/300?img=3"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=8"
              personImage="https://i.pravatar.cc/300?img=8"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=2"
              personImage="https://i.pravatar.cc/300?img=2"
            ></Card>
          </div>
        </div>
        <div className={`${isActive == "Tab2" ? `block` : `hidden`} mt-8`}>
          <div className="grid grid-cols-3 gap-6">
            <Card
              thumbImage="https://picsum.photos/500/300?random=4"
              personImage="https://i.pravatar.cc/300?img=4"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=5"
              personImage="https://i.pravatar.cc/300?img=5"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=6"
              personImage="https://i.pravatar.cc/300?img=6"
            ></Card>
          </div>
        </div>
        <div className={`${isActive == "Tab3" ? `block` : `hidden`} mt-8`}>
          <div className="grid grid-cols-3 gap-6">
            <Card
              thumbImage="https://picsum.photos/500/300?random=5"
              personImage="https://i.pravatar.cc/300?img=5"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=4"
              personImage="https://i.pravatar.cc/300?img=4"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=6"
              personImage="https://i.pravatar.cc/300?img=6"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=9"
              personImage="https://i.pravatar.cc/300?img=9"
            ></Card>
          </div>
        </div>
        <div className={`${isActive == "Tab4" ? `block` : `hidden`} mt-8`}>
          <div className="grid grid-cols-3 gap-6">
            <Card
              thumbImage="https://picsum.photos/500/300?random=9"
              personImage="https://i.pravatar.cc/300?img=9"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=8"
              personImage="https://i.pravatar.cc/300?img=8"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=3"
              personImage="https://i.pravatar.cc/300?img=3"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=4"
              personImage="https://i.pravatar.cc/300?img=4"
            ></Card>
            <Card
              thumbImage="https://picsum.photos/500/300?random=1"
              personImage="https://i.pravatar.cc/300?img=1"
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabSection;
