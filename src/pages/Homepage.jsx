import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoGridSection from "../components/PromoGridSection";
import NewArrivalsSection from "../components/NewArrivalsSection";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSlider />
      <FeaturedProducts />
      <PromoGridSection />
      <NewArrivalsSection />
    </>
  );
};

export default HomePage;