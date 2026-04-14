import Image from "next/image";
import Link from "next/link";

const ButtonLogin = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="text-md block w-full text-white bg-green-600 font-bold rounded-md py-2.5 hover:bg-green-700"
        >
          Masuk
        </button>
        <Link
          href="/register"
          className="text-md block w-full bg-green-50 text-green-600 rounded-md font-bold py-2.5 hover:bg-green-100 text-center"
        >
          Daftar
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-0.5 bg-gray-200 flex-1 rounded-2xl"></div>
        <span className="text-md text-slate-600 my-6">atau</span>
        <div className="h-0.5 bg-gray-200 flex-1 rounded-2xl"></div>
      </div>
      <button className="flex flex-row gap-2 text-md w-full justify-center bg-white text-gray-600 border-gray-200 border rounded-md font-bold py-2.5 hover:bg-slate-50">
        <Image src="/google-icon.svg" alt="" width={20} height={20} />
        Masuk dengan Google
      </button>
    </>
  );
};

export default ButtonLogin;
