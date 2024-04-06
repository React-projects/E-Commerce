import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./pages/Auth/LoginPage";
import RigesterPage from "./pages/Auth/RigesterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrandsPage from "./pages/Brand/AllBrandsPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RigesterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrands" element={<AllBrandsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
