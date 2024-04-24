import baseUrl from "../Api/baseUrl";

const usePostDatawithImages = async (url, params) => {
  const config = {
    headers:{"Content-Type":"multipart/form-data"}
  };
  
  const res = await baseUrl.post(url, params, config);
  console.log(res.status)

  return res;
};
const usePostData = async (url, params) => {
  const res = await baseUrl.post(url, params);

  return res;
};
export { usePostData, usePostDatawithImages };
