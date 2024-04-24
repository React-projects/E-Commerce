/* eslint-disable react-hooks/exhaustive-deps */

import { images } from "../../assets/Imports/images";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/Actions/categoryAction";
import { notify, Toast } from "../../CustomHook/useNotifications";
const useAddCategoryHook = () => {
  const dispatch = useDispatch();

  const [Img, setImg] = useState(images.avatar);
  const [Name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setloading] = useState(true);
  const [ispress, setIspress] = useState(false);
  // metood to change Name to clicked

  const changeName = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    if (loading === false) {
      setImg(images.avatar);
      setName("");
      setSelectedFile(null);
      console.log("تمام الانتهاء");
      setloading(true);

      setTimeout(() => {
        setIspress(false);
      }, 1000);

      //  ! to check  status of response
      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
    }
  }, [loading]);
  //  !methods to select  images by user
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allcategoryData.category);

  //  !methods to send data to database
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (Name === "" || selectedFile === null) {
      notify(" من فضلك اكمل البيانات اولا !", "warning");
      return;
    }

    const formData = new FormData();
    formData.append("name", Name);
    formData.append("image", selectedFile);
    setloading(true);
    setIspress(true);
    await dispatch(createCategory(formData));
    setloading(false);
  };

  return [
    Toast,
    Img,
    Name,
    loading,
    ispress,
    handelSubmit,
    changeName,
    onImageChange,
  ];
};

export default useAddCategoryHook;
