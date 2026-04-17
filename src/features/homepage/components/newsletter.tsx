const Newsletter = () => {
  return (
    <>
      <div className="my-16">
        <div className="container mx-auto  px-5 md:px-0">
          <div className="h-96 text-center flex flex-row items-center rounded-lg bg-[url('/bg-newslatter.webp')] bg-cover bg-center bg-mauve-950/90 bg-blend-overlay px-5">
            <div className="mx-auto md:w-2/5">
              <div className="flex flex-col gap-3 mx-auto px-5 md:px-0">
                <p className="uppercase md:text-lg text-md font-medium text-gray-400">
                  newsletter
                </p>
                <h1 className="md:text-4xl text-2xl font-bold text-white">
                  Mau Belajar Lebih Banyak?
                </h1>
                <p className="md:text-md text-sm font-medium text-white tracking-wide">
                  Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                  penawaran spesial dari program-program terbaik hariesok.id
                </p>
              </div>
              <form action="" className="mt-10">
                <div className="md:border flex flex-col gap-4 md:flex-row md:justify-between w-full md:rounded-lg md:bg-white md:border-gray-400 md:pl-8 md:pr-3 md:py-2.5 text-md md:focus-within:border-amber-500 md:focus-within:outline md:focus-within:outline-amber-500">
                  <input
                    type="email"
                    name="email"
                    placeholder="Masukan Emailmu"
                    className="md:outline-0 flex-1 md:focus:outline-none md:focus:border-0 rounded-lg bg-white md:bg-none border-gray-400 py-2.5 md:py-0 focus-within:border-amber-500 focus-within:outline focus-within:outline-amber-500 placeholder:text-center md:placeholder:text-left"
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
