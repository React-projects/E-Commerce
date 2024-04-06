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
      <ProductCategory title="الاكثر مبيعا" btntitle="المزيد" />
      <DiscountSection />

      <ProductCategory title="احدث  الازياء" btntitle="المزيد" />
      <BrandFeatured title="  اشهر الماركات" btntitle="المزيد"/>

    </div>
  );
}

export default HomePage;
