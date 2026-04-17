import BrandFooter from "./components/brandFooter";
import Copyrights from "./components/copyrights";
import NavFooter from "./components/navFooter";
import Socmed from "./components/socmed";

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray-300">
        <div className="container mx-auto font-dm-sans py-14">
          <div className="flex flex-col md:flex-row justify-between pb-10 px-5 md:px-0">
            <BrandFooter />
            <NavFooter />
          </div>
          <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-between md:items-center pt-5 border-t border-t-gray-400 px-5 md:px-0">
            <Copyrights />
            <Socmed />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
