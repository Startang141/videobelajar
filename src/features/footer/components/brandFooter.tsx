import Image from "next/image";
import Link from "next/link";

const BrandFooter = () => {
  return (
    <>
      <div className="w-[30%]">
        <Link href="/">
          <Image src="/Logo.png" alt="" width={194} height={30} />
        </Link>
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-lg font-bold">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="text-md">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p className="text-md">+62-877-7123-1234</p>
        </div>
      </div>
    </>
  );
};

export default BrandFooter;
