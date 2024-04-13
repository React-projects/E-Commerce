import { Col, Container, Row } from "react-bootstrap";
import AdminSlideBar from "../../components/Admin/AdminSlideBar";
import AdminAllProducts from "../../components/Admin/AdminAllProducts";
import Pagination from "../../components/Utility/Pagination";

function AdminAllProductsPage() {
  return (
    <Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <AdminSlideBar />
        </Col>
        <Col sm="12" md="10">
          <AdminAllProducts />
          <Pagination/>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAllProductsPage;
