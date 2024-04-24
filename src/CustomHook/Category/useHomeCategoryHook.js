import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllCategoriesData } from "../../redux/Actions/categoryAction";
function useHomeCategoryHook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCategoriesData());
  }, [dispatch]);
  // last data for api to all categories from reducer
  const category = useSelector((state) => state.allcategoryData.category);
  // last data for api to loading from reducer

  const loading = useSelector((state) => state.allcategoryData.loading);

  console.log(category.data);
  console.log(loading);

  // all color background categories
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];

  return [colors, category, loading];
}

export default useHomeCategoryHook;
