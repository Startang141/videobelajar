import NavImage from "./components/navImage";
import NavUser from "./components/navUser";

const Navbar = () => {
  return (
    <>
      <div className="relative shadow-md bg-white">
        <div className="container mx-auto px-5 md:px-0 py-4">
          <div className="flex flex-row justify-between w-full items-center">
            <NavImage />
            <NavUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
