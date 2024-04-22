import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/Utility/Pagination";


function AllCategoryPage() {

  return (
    <div style={{ minHeight: "740px" }}>
      <CategoryContainer></CategoryContainer> <Pagination />
    </div>
  );
}

export default AllCategoryPage;
