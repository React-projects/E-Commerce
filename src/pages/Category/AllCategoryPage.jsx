import { useDispatch, useSelector } from "react-redux";
import CategoryContainer from "../../components/Category/CategoryContainer";
import Pagination from "../../components/Utility/Pagination";
import { useEffect } from "react";
import {
  GetAllCategoriesData,
  GetAllCategoriesDataPages,
} from "../../redux/Actions/categoryAction";

function AllCategoryPage() {
  const dispatch = useDispatch();
  // * to get limited of product  in page
  useEffect(() => {
    dispatch(GetAllCategoriesData(6));
  }, [dispatch]);

  // * show all data in reducer  AllcategoryData

  const category = useSelector((state) => state.allcategoryData.category);
  const loading = useSelector((state) => state.allcategoryData.loading);
  let pageCountNum = 0;
  if (category.paginationResult)
    pageCountNum = category.paginationResult.numberOfPages;
  // * to get number pages in pagination

  const getPage = (page) => {
    dispatch(GetAllCategoriesDataPages(page));
  };

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
