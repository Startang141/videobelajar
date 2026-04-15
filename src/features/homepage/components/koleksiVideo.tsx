import TabSection from "./tabSection";

const KoleksiVideo = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="font-semibold text-3xl">
            Koleksi Video Pembalajaran Unggulan
          </h2>
          <p className="text-md font-medium text-slate-500 tracking-wide">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>
        <TabSection />
      </div>
    </>
  );
};

export default KoleksiVideo;
