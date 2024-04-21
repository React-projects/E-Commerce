import useGetData from "../../Hooks/useGetData";
import { GET_ALL_CATEGORY, GET_ERROR } from "../types/type";

export const GetAllCategoriesData = () => async (dispatch) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = await useGetData('https://dummyjson.com/products');
  try {
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response.products 
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error is" + error,
    });
  }
};

export default GetAllCategoriesData;
