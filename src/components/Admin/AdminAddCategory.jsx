import { Col, Row, Spinner } from "react-bootstrap";
import { images } from "../../assets/Imports/images";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/Actions/categoryAction";

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
  //  !methods to send data to database
  const handelSubmit = async (e) => {
    e.preventDefault();

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
      console.log("  تم التحميل");
      setloading(true);

      setTimeout(() => {
        setIspress(false);
      }, 3000);
    }
  }, [loading]);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <label for="upload-photo">
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
