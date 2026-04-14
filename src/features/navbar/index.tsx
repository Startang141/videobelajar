import NavImage from "./components/navImage";

const Navbar = () => {
  return (
    <>
      <div className="relative shadow-md bg-white">
        <div className="container mx-auto py-4">
          <NavImage />
        </div>
      </div>
    </>
  );
};

export default Navbar;
