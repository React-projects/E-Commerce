import { useEffect } from "react";
import {
  GetAllCategoriesData,
  GetAllCategoriesDataPages,
} from "../../redux/Actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const useAllCategoryPageHook = () => {
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

  return [loading, getPage, pageCountNum,category];
};

export default useAllCategoryPageHook;
