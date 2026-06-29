"use client";

import Image from "next/image";
import { FC } from "react";

interface InstructorType {
  name: string;
  role: string;
  company: string;
  image: string;
}

interface CourseType {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbImage: string;
  instructor: InstructorType;
  rating: number;
  totalReviews: number;
  price: number;
}

interface modalDetailProps {
  handleCloseModal: () => void;
  courseToRead: CourseType | null;
}

const ModalDetail: FC<modalDetailProps> = ({
  handleCloseModal,
  courseToRead,
}) => {
  if (!courseToRead) return null;
  return (
    <>
      <div>
        <div className="bg-white border border-slate-200 rounded-md p-4 w-fit mx-auto mt-16">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">Detail Course</h2>
            <button className="cursor-pointer" onClick={handleCloseModal}>
              X
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <Image
                src={courseToRead.thumbImage}
                alt={courseToRead.title}
                width={500}
                height={20}
                className="h-64 w-full rounded-md object-cover"
              />
            </div>

            <div>
              <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium capitalize text-green-700">
                {courseToRead.category}
              </span>

              <h3 className="text-xl font-bold text-slate-800">
                {courseToRead.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {courseToRead.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-slate-500">Rating</p>
                  <p className="font-semibold text-slate-800">
                    {courseToRead.rating}/5
                  </p>
                </div>

                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-slate-500">Reviews</p>
                  <p className="font-semibold text-slate-800">
                    {courseToRead.totalReviews}
                  </p>
                </div>

                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-slate-500">Price</p>
                  <p className="font-semibold text-slate-800">
                    Rp {courseToRead.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-slate-500">CourseToRead ID</p>
                  <p className="font-semibold text-slate-800">
                    {courseToRead.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetail;
