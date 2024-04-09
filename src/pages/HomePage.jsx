import BrandFeatured from "../Components/Brand/BrandFeature";
import DiscountSection from "../Components/Home/DiscountSection";
import HomeCategory from "../Components/Home/HomeCategory";
import Slider from "../Components/Home/Slider";

import ProductCategory from "../Components/products/ProductCategory";

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
