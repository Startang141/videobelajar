import Image from "next/image";
import Link from "next/link";

const Socmed = () => {
  return (
    <>
      <div>
        <ul className="flex flex-row gap-4">
          <li className="rounded-full border border-gray-400 p-2">
            <Link href="">
              <Image src="/Linkedin-Icon.svg" alt="" width={20} height={20} />
            </Link>
          </li>
          <li className="rounded-full border border-gray-400 p-2">
            <Link href="">
              <Image src="/Facebook-Icon.svg" alt="" width={20} height={20} />
            </Link>
          </li>
          <li className="rounded-full border border-gray-400 p-2">
            <Link href="">
              <Image src="/Instagram-Icon.svg" alt="" width={20} height={20} />
            </Link>
          </li>
          <li className="rounded-full border border-gray-400 p-2">
            <Link href="">
              <Image src="/Twitter-Icon.svg" alt="" width={20} height={20} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socmed;
