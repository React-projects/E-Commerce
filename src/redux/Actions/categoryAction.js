import useGetData from "../../Hooks/useGetData";
import { GET_ALL_CATEGORY, GET_ERROR } from "../types/type";


//  ! action to get limited of products show in page
export const GetAllCategoriesData = (limit) => async (dispatch) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = await useGetData(`/api/v1/categories?limit=${limit}`);
  try {
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error is" + error,
    });
  }
};
//  ! action to get number of pages  

export const GetAllCategoriesDataPages = (page) => async (dispatch) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`);
  try {
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error is" + error,
    });
  }
};
