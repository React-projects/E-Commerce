import DiscountSection from "../Components/Home/DiscountSection";
import HomeCategory from "../Components/Home/HomeCategory";
import Slider from "../Components/Home/Slider";
import NavBar from "../Components/Utility/NavBarLogin";
import ProductCategory from "../Components/products/ProductCategory";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Slider />
      <HomeCategory />
      <ProductCategory title="الاكثر مبيعا" btntitle="المزيد" />
      <DiscountSection />

      <ProductCategory title="احدث  الازياء" btntitle="المزيد" />
    </div>
  );
}

export default HomePage;
