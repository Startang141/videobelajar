import TabSection from "./tabSection";

const KoleksiVideo = () => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-0">
        <div className="mb-8">
          <h2 className="font-semibold md:text-3xl text-2xl">
            Koleksi Video Pembalajaran Unggulan
          </h2>
          <p className="md:text-md text-sm mt-2 font-medium text-slate-500 tracking-wide">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>
        <TabSection />
      </div>
    </>
  );
};

export default KoleksiVideo;
