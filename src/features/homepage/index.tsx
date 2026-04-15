import Hero from "./components/hero";
import KoleksiVideo from "./components/koleksiVideo";
import Newsletter from "./components/newsletter";

const Homepage = () => {
  return (
    <>
      <div className="font-dm-sans bg-[#fffdf3]">
        <Hero />
        <KoleksiVideo />
        <Newsletter />
      </div>
    </>
  );
};

export default Homepage;
