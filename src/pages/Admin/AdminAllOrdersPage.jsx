import { Col, Container, Row } from "react-bootstrap";
import AdminSlideBar from "../../components/Admin/AdminSlideBar";
import Pagination from "../../components/Utility/Pagination";
import AdminAllOrdersItem from "../../components/Admin/AdminAllOrdersItem";

function AdminAllOrdersPage() {
  return (
    <Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <AdminSlideBar />
        </Col>
        <Col sm="12" md="10">
          <AdminAllOrdersItem/>
          <AdminAllOrdersItem/>
          <AdminAllOrdersItem/>
          <Pagination/>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminAllOrdersPage;
