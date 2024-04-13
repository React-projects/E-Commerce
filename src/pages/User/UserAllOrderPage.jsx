import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/User/UserSideBar";
import UserAllOrders from "../../components/User/UserAllOrders";
function UserAllOrderPage() {
  return (
    <Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <UserSideBar />
        </Col>
        <Col sm="12" md="10">
          <UserAllOrders/>
        </Col>
      </Row>
    </Container>
  );
}

export default UserAllOrderPage;
