import BrandCategory from "../../Components/Brand/BrandCategory";
import Pagination from "../../Components/Utility/Pagination";

function AllBrandsPage() {
  return (
    <div style={{ minHeight: "740px" }}>
      <BrandCategory></BrandCategory> 
      <Pagination />
    </div>
  );
}

export default AllBrandsPage;
