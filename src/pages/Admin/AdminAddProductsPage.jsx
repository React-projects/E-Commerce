import { Col, Container, Row } from "react-bootstrap";
import AdminSlideBar from "../../components/Admin/AdminSlideBar";
import AdminAddProducts from "../../components/Admin/AdminAddProducts";
function AdminAddProductsPage() {
  return (
    <Container className="py-5">
    <Row>
      <Col sm="12" md="2">
        <AdminSlideBar />
      </Col>
      <Col sm="12" md="10">
        <AdminAddProducts/>
      </Col>
    </Row>
  </Container>
  )
}

export default AdminAddProductsPage
