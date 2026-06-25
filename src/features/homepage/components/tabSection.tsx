"use client";
import Card from "@/src/components/card";
import Link from "next/link";
import { useState } from "react";
import { useCourse } from "@/src/context/CourseContext";

const Tabs = [
  { id: 1, key: "All", text: "Semua Kelas", category: null },
  { id: 2, key: "pemasaran", text: "Pemasaran", category: "pemasaran" },
  { id: 3, key: "desain", text: "Desain", category: "desain" },
  {
    id: 4,
    key: "pengembangan diri",
    text: "Pengembangan Diri",
    category: "pengembangan diri",
  },
  { id: 5, key: "bisnis", text: "Bisnis", category: "bisnis" },
];

const TabSection = () => {
  const [isActive, setIsActive] = useState("All");
  const { listCourse } = useCourse();

  const activeTab = Tabs.find((tab) => tab.key === isActive);

  const filteredCourse =
    activeTab?.category === null
      ? listCourse
      : listCourse.filter((course) => course.category === activeTab?.category);

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
        <div className="block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourse.map((data) => (
              <Card
                key={data.id}
                id={data.id}
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
