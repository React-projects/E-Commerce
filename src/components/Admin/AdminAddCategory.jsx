/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row, Spinner } from "react-bootstrap";
import { images } from "../../assets/Imports/images";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/Actions/categoryAction";
import { notify, Toast } from "../../massgeError/massageError";

function AdminAddCategory() {
  const dispatch = useDispatch();

  const [Img, setImg] = useState(images.avatar);
  const [Name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setloading] = useState(true);
  const [ispress, setIspress] = useState(false);
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

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <label htmlFor="upload-photo">
            <img
              src={Img}
              alt="fzx"
              height="100px"
              width="120px"
              style={{ cursor: "pointer" }}
            />
          </label>
          <input
            type="file"
            name="photo"
            onChange={onImageChange}
            id="upload-photo"
          />
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            value={Name}
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
          <Toast />
        </Col>
      </Row>
      {ispress ? (
        loading ? (
          <Spinner animation="grow" variant="dark" />
        ) : (
          <h4> done </h4>
        )
      ) : null}
    </div>
  );
}
export default AdminAddCategory;
