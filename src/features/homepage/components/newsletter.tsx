const Newsletter = () => {
  return (
    <>
      <div className="my-16">
        <div className="container mx-auto ">
          <div className="md:h-96 text-center flex flex-row items-center rounded-lg bg-[url('/bg-newslatter.webp')] bg-cover bg-center bg-mauve-950/90 bg-blend-overlay">
            <div className="mx-auto w-2/5">
              <div className="flex flex-col gap-3 mx-auto">
                <p className="uppercase text-lg font-medium text-gray-400">
                  newsletter
                </p>
                <h1 className="text-4xl font-bold text-white">
                  Mau Belajar Lebih Banyak?
                </h1>
                <p className="text-md font-medium text-white tracking-wide">
                  Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                  penawaran spesial dari program-program terbaik hariesok.id
                </p>
              </div>
              <form action="" className="mt-10">
                <div className="border flex justify-between w-full rounded-lg bg-white border-gray-400 pl-8 pr-3 py-2.5 text-md focus-within:border-amber-500 focus-within:outline focus-within:outline-amber-500">
                  <input
                    type="email"
                    name="email"
                    placeholder="Masukan Emailmu"
                    className="outline-0 flex-1 focus:outline-none focus:border-0"
                  />
                  <button
                    type="button"
                    className="bg-amber-400 hover:bg-amber-500 py-2.5 px-6 text-md rounded-lg text-white font-bold"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
