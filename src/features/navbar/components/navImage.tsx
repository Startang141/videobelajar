import Image from "next/image";
import Link from "next/link";

const NavImage = () => {
  return (
    <>
      <div>
        <Link href="/">
          <Image src="/Logo.png" alt="" width={194} height={30} />
        </Link>
      </div>
    </>
  );
};

export default NavImage;
