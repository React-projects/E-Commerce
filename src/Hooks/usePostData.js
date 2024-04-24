import baseUrl from "../Api/baseUrl";

const usePostDatawithImages = async (url, params) => {
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  const res = await baseUrl.post(url, params, config);

  return res.data;
};
const usePostData = async (url, params) => {
  const res = await baseUrl.post(url, params);

  return res.data;
};
export { usePostData, usePostDatawithImages };
