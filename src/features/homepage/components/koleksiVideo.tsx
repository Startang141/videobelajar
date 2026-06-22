"use client";
import Button from "@/src/components/Button";
import TabSection from "./tabSection";
import { useAuth } from "@/src/context/AuthContext";

const KoleksiVideo = () => {
  const { userLogin } = useAuth();
  return (
    <>
      <div className="container mx-auto px-5 md:px-0">
        <div className="mb-8">
          <div className="flex flex-row items-center justify-between">
            <div className="w-full">
              <h2 className="font-semibold md:text-3xl text-2xl">
                Koleksi Video Pembalajaran Unggulan
              </h2>
              <p className="md:text-md text-sm mt-2 font-medium text-slate-500 tracking-wide">
                Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
              </p>
            </div>
            {userLogin?.role === "Admin" && (
              <Button
                type="button"
                name="Add New Course"
                className="bg-green-600 hover:bg-green-700 py-2.5 px-6 rounded-md text-sm text-white w-fit ml-auto"
              />
            )}
          </div>
        </div>
        <TabSection />
      </div>
    </>
  );
};

export default KoleksiVideo;
