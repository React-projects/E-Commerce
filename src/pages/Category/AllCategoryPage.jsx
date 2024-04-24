import useAllCategoryPageHook from "../../CustomHook/Category/useAllCategoryPageHook";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/Utility/Pagination";

function AllCategoryPage() {
   const [loading, getPage, pageCountNum,category]=useAllCategoryPageHook();

  return (
    <div style={{ minHeight: "740px" }}>
      <CategoryContainer data={category.data} loading={loading} />

      {pageCountNum > 1 ? (
        <Pagination pageCount={pageCountNum} onPress={getPage} />
      ) : null}
    </div>
  );
}

export default AllCategoryPage;
