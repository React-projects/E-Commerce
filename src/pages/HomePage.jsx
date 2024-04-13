import BrandFeatured from "../components/Brand/BrandFeature";
import DiscountSection from "../components/Home/DiscountSection";
import HomeCategory from "../components/Home/HomeCategory";
import Slider from "../components/Home/Slider";

import ProductCategory from "../components/products/CardProductsContainer";

function HomePage() {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <ProductCategory
        title="الاكثر مبيعا"
        btntitle="المزيد"
        PathText="/products"
      />
      <DiscountSection />

      <ProductCategory
        title="احدث  الازياء"
        btntitle="المزيد"
        PathText="/products"
      />
      <BrandFeatured
        title="  اشهر الماركات"
        btntitle="المزيد"
        PathText="/allbrands"
      />
    </div>
  );
}

export default HomePage;
