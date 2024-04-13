import { Col, Container, Row } from "react-bootstrap";
import AdminSlideBar from "../../components/Admin/AdminSlideBar";
import CartItem from "../../components/Cart/CartItem";
import ClientDetails from "../../components/Admin/ClientDetails";

function AdminOrdersDetails() {
  return (
    <Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <AdminSlideBar />
        </Col>
        <Col sm="12" md="10">
          <CartItem />
          <ClientDetails/>

        </Col>
      </Row>
    </Container>
  );
}

export default AdminOrdersDetails;
