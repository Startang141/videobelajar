"use client";
import Button from "@/src/components/Button";
import TabSection from "./tabSection";
import { useAuth } from "@/src/context/AuthContext";
import { useState } from "react";
import ModalAdd from "./modalAdd";

const KoleksiVideo = () => {
  const { userLogin } = useAuth();
  const [showAddModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
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
              <div onClick={() => setShowModal(true)}>
                <Button
                  type="button"
                  name="Add New Course"
                  className="bg-green-600 hover:bg-green-700 py-2.5 px-6 rounded-md text-sm text-white w-fit mt-4 ml-auto"
                />
              </div>
            )}
          </div>
        </div>
        <TabSection />
      </div>
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-800/50 flex items-center justify-center p-4 overflow-hidden">
          <ModalAdd handleCloseModal={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default KoleksiVideo;
