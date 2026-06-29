"use client";
import Button from "@/src/components/Button";
import TabSection from "./tabSection";
import { useAuth } from "@/src/context/AuthContext";
import { useState } from "react";
import ModalAdd from "./modalForm";
import ModalDetail from "./modalDetail";

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

const KoleksiVideo = () => {
  const { userLogin } = useAuth();
  const [showAddModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState<CourseType | null>(null);
  const [courseToRead, setCourseToRead] = useState<CourseType | null>(null);

  const hanldeOpenAddModal = () => {
    setCourseToEdit(null);
    setShowModal(true);
  };

  const handleOpenEditModal = (course: CourseType) => {
    setCourseToEdit(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setCourseToEdit(null);
    setShowModal(false);
  };

  const handleOpenDetailModal = (course: CourseType) => {
    setCourseToRead(course);
    setShowDetailModal(true);
  };

  const handleCloseModalDetail = () => {
    setCourseToRead(null);
    setShowDetailModal(false);
  };

  return (
    <>
      <div className="container mx-auto px-5 md:px-0">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full">
              <h2 className="font-semibold md:text-3xl text-2xl">
                Koleksi Video Pembalajaran Unggulan
              </h2>
              <p className="md:text-md text-sm mt-2 font-medium text-slate-500 tracking-wide">
                Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
              </p>
            </div>
            {userLogin?.role === "Admin" && (
              <div onClick={hanldeOpenAddModal}>
                <Button
                  type="button"
                  name="Add New Course"
                  className="bg-green-600 hover:bg-green-700 py-2.5 px-6 rounded-md text-sm text-white w-fit mt-4 ml-auto"
                />
              </div>
            )}
          </div>
        </div>
        <TabSection
          handleOpenEditModal={handleOpenEditModal}
          handleOpenDetailModal={handleOpenDetailModal}
        />
      </div>
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-800/50 flex items-center justify-center p-4 overflow-hidden">
          <ModalAdd
            handleCloseModal={handleCloseModal}
            courseToEdit={courseToEdit}
          />
        </div>
      )}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 bg-slate-800/50 flex items-center justify-center p-4 overflow-hidden">
          <ModalDetail
            handleCloseModal={handleCloseModalDetail}
            courseToRead={courseToRead}
          />
        </div>
      )}
    </>
  );
};

export default KoleksiVideo;
