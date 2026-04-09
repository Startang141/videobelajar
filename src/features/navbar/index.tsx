import NavImage from "./components/navImage";

const Navbar = () => {
  return (
    <>
      <div className="block shadow-md bg-white sticky top-0">
        <div className="container mx-auto py-4">
          <NavImage />
        </div>
      </div>
    </>
  );
};

export default Navbar;
