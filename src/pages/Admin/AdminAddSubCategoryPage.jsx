import { Col, Container, Row } from "react-bootstrap";
import AdminSlideBar from "../../components/Admin/AdminSlideBar";
import AdminAddSubCategory from "../../components/Admin/AdminAddSubCategory";

function AdminAddSubCategoryPage() {
  return (
<Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <AdminSlideBar />
        </Col>
        <Col sm="12" md="10">
          <AdminAddSubCategory/>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAddSubCategoryPage
