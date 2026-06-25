"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { courses } from "../lib/dummyCourse";
import { toast } from "sonner";

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

interface CourseContextType {
  listCourse: CourseType[];
  addCourse: (newCourse: CourseType) => void;
  deleteCourse: (id: number) => void;
  updateCourse: (updateCourse: CourseType) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [listCourse, setListCourses] = useState<CourseType[]>(courses);

  const addCourse = (newCourse: CourseType) => {
    const updateCourse = [...listCourse, newCourse];
    setListCourses(updateCourse);
    toast.success("Berhasil Menambahkan Course");
  };

  const deleteCourse = (id: number) => {
    setListCourses((item) => item.filter((course) => course.id !== id));
    toast.success("Course berhasil dihapus");
  };

  const updateCourse = (updateCourse: CourseType) => {
    setListCourses((prev) =>
      prev.map((course) =>
        course.id === updateCourse.id ? { ...course, ...updateCourse } : course,
      ),
    );
    toast.success("Update Success");
  };

  return (
    <CourseContext.Provider
      value={{ addCourse, deleteCourse, updateCourse, listCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = (): CourseContextType => {
  const context = useContext(CourseContext);

  if (!context) {
    throw new Error("useContext tidak bisa digunakan");
  }

  return context;
};
