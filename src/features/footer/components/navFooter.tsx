import Link from "next/link";

const NavFooter = () => {
  return (
    <>
      <div className="flex flex-row gap-12">
        <div>
          <p className="font-bold text-md">Kategori</p>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Digital & Teknologi
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Pemasaran
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Manajemen Bisnis
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Pengembangan Diri
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-md">Perusahaan</p>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Ketentuan Layanan
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Bantuan
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-md">Komunitas</p>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Tips Sukses
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium text-md text-gray-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavFooter;
