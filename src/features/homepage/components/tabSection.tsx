"use client";
import Card from "@/src/components/card";
import Link from "next/link";
import { useState } from "react";
import { courses } from "@/src/lib/dummyCourse";

const Tabs = [
  { id: 1, key: "All", text: "Semua Kelas" },
  { id: 2, key: "Tab1", text: "Pemasaran" },
  { id: 3, key: "Tab2", text: "Desain" },
  { id: 4, key: "Tab3", text: "Pengembangan Diri" },
  { id: 5, key: "Tab4", text: "Bisnis" },
];

const TabSection = () => {
  const Pemasaran = courses.filter((course) => course.category === "pemasaran");
  const Desain = courses.filter((course) => course.category === "desain");
  const PengembanganDiri = courses.filter(
    (course) => course.category === "pengembangan diri",
  );
  const Bisnis = courses.filter((course) => course.category === "bisnis");
  const [isActive, setIsActive] = useState("All");
  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <ul className="flex flex-row w-full gap-8">
            {Tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  className="flex flex-col"
                  onClick={() => setIsActive(tab.key)}
                >
                  <Link
                    href={""}
                    className={`${
                      isActive === tab.key ? `text-[#F64920]` : `text-slate-500`
                    } font-medium text-md py-3 tracking-wide `}
                  >
                    {tab.text}
                  </Link>
                  <span
                    className={`${
                      isActive === tab.key ? "block" : "hidden"
                    } border-2 rounded-full w-12 text-[#F64920]`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="my-8">
        <div className={`${isActive == "All" ? `block` : `hidden`} `}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                thumbImage={data.thumbImage}
                personImage={data.instructor.image}
                personName={data.instructor.name}
                role={data.instructor.role}
                price={data.price}
                rating={data.rating}
                totalReviews={data.totalReviews}
              ></Card>
            ))}
          </div>
        </div>
        <div className={`${isActive == "Tab1" ? `block` : `hidden`} mt-8`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Pemasaran.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                thumbImage={data.thumbImage}
                personImage={data.instructor.image}
                personName={data.instructor.name}
                role={data.instructor.role}
                price={data.price}
                rating={data.rating}
                totalReviews={data.totalReviews}
              ></Card>
            ))}
          </div>
        </div>
        <div className={`${isActive == "Tab2" ? `block` : `hidden`} mt-8`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Desain.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                thumbImage={data.thumbImage}
                personImage={data.instructor.image}
                personName={data.instructor.name}
                role={data.instructor.role}
                price={data.price}
                rating={data.rating}
                totalReviews={data.totalReviews}
              ></Card>
            ))}
          </div>
        </div>
        <div className={`${isActive == "Tab3" ? `block` : `hidden`} mt-8`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PengembanganDiri.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                thumbImage={data.thumbImage}
                personImage={data.instructor.image}
                personName={data.instructor.name}
                role={data.instructor.role}
                price={data.price}
                rating={data.rating}
                totalReviews={data.totalReviews}
              ></Card>
            ))}
          </div>
        </div>
        <div className={`${isActive == "Tab4" ? `block` : `hidden`} mt-8`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Bisnis.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                thumbImage={data.thumbImage}
                personImage={data.instructor.image}
                personName={data.instructor.name}
                role={data.instructor.role}
                price={data.price}
                rating={data.rating}
                totalReviews={data.totalReviews}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabSection;
