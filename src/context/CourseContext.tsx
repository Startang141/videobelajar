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
  deleteTodo: (id: number) => void;
  //   updateTodo: (newCourse: CourseType) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [listCourse, setListCourses] = useState<CourseType[]>(courses);
  const addCourse = (newCourse: CourseType) => {
    const updateCourse = [...listCourse, newCourse];
    setListCourses(updateCourse);
    toast.success("Berhasil Menambahkan Course");
  };

  const deleteTodo = (id: number) => {
    setListCourses((item) => item.filter((course) => course.id !== id));
  };

  return (
    <CourseContext.Provider value={{ addCourse, deleteTodo, listCourse }}>
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
