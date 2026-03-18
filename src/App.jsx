import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import HeroSlider from "./components/HeroSlider";
import FeaturedProducts from "./components/FeaturedProducts";
import PromoGridSection from "./components/PromoGridSection";
import NewArrivalsSection from "./components/NewArrivalsSection";

function App() {
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
}

export default App;
