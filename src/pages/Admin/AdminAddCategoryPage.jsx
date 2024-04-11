import { Col, Container, Row } from "react-bootstrap";
import AdminSlideBar from "../../Components/Admin/AdminSlideBar";
import AdminAddCategory from "../../Components/Admin/AdminAddCategory";
function AdminAddCategoryPage() {
  return (
    <div>
       <Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <AdminSlideBar />
        </Col>
        <Col sm="12" md="10">
        <AdminAddCategory/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}






  


export default AdminAddCategoryPage
