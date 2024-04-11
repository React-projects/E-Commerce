import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Auth/LoginPage";
import RigesterPage from "../pages/Auth/RigesterPage";
import AllCategoryPage from "../pages/Category/AllCategoryPage";
import AllBrandsPage from "../pages/Brand/AllBrandsPage";
import ShowProductsPage from "../pages/Products/ShowProductsPage";
import ProductDetailsPage from "../pages/Products/ProductDetailsPage";
import CartPage from "../pages/Cart/CartPage";
import PaymentPage from "../pages/Payment/PaymentPage";
import AdminAllProductsPage from "../pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "../pages/Admin/AdminAllOrdersPage";
import AdminOrdersDetails from "../pages/Admin/AdminOrdersDetails";
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RigesterPage />} />
        <Route path="/allcategory" element={<AllCategoryPage />} />
        <Route path="/allbrands" element={<AllBrandsPage />} />
        <Route path="/products" element={<ShowProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order/paymethoud" element={<PaymentPage />} />
        <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
        <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
        <Route path="/admin/orders/:id" element={<AdminOrdersDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
