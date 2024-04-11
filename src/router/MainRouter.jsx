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
import AdminAddBrandPage from "../pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "../pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "../pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "../pages/Admin/AdminAddProductsPage";
import UserAllOrderPage from "../pages/User/UserAllOrderPage";
import UserFavoriteProductsPage from "../pages/User/UserFavoriteProductsPage";
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
        <Route path="/admin/addbrand" element={<AdminAddBrandPage/>} />
        <Route path="/admin/addcategory" element={<AdminAddCategoryPage/>} />
        <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage/>} />
        <Route path="/admin/addproduct" element={<AdminAddProductsPage/>} />
        <Route path="/user/allorders" element={<UserAllOrderPage/>} />
        <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage/>} />
     
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
