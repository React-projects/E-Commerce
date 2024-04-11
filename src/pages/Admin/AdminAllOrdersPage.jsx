import { Col, Container, Row } from "react-bootstrap";
import AdminSlideBar from "../../Components/Admin/AdminSlideBar";
import Pagination from "../../Components/Utility/Pagination";
import AdminAllOrdersItem from "../../Components/Admin/AdminAllOrdersItem";

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
