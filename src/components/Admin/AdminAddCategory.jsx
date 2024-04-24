import { Col, Row, Spinner } from "react-bootstrap";
import useAddCategoryHook from "../../CustomHook/Category/useAddCategoryHook";

function AdminAddCategory() {
  const [
    Toast,
    Img,
    Name,
    loading,
    ispress,
    handelSubmit,
    changeName,
    onImageChange,
  ] = useAddCategoryHook();
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
            onChange={changeName}
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
