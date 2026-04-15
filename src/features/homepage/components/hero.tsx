import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="my-16">
        <div className="container mx-auto ">
          <div className="md:h-96 text-center flex flex-row items-center rounded-lg bg-[url('/bg-hero.webp')] bg-cover bg-center bg-mauve-950/90 bg-blend-overlay">
            <div>
              <div className="flex flex-col gap-3 w-3/4 mx-auto">
                <h1 className="text-5xl font-bold text-white">
                  Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform
                  Video Interaktif!
                </h1>
                <p className="text-md font-medium text-white tracking-wide">
                  Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                  video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                  juga dapat berpartisipasi dalam latihan interaktif yang akan
                  meningkatkan pemahaman Anda.
                </p>
              </div>
              <button className="mt-8">
                <Link
                  href={"#"}
                  className="bg-green-600 hover:bg-green-700 py-2.5 px-6 rounded-md text-white"
                >
                  Temukan Video Course untuk Dipelajari
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
