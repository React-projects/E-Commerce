import BrandCategory from "../../components/Brand/BrandCategory";
import Pagination from "../../components/Utility/Pagination";

function AllBrandsPage() {
  return (
    <div style={{ minHeight: "740px" }}>
      <BrandCategory></BrandCategory> 
      <Pagination />
    </div>
  );
}

export default AllBrandsPage;
