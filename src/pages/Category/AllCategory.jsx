import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";

function AllCategory() {
  return (
    <div style={{minHeight:'740px'}}>
      <CategoryContainer></CategoryContainer>{" "}
      <Pagination/>

    </div>
  );
}

export default AllCategory;
