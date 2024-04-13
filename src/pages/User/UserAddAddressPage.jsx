import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/User/UserSideBar";
import UserAddAddress from "../../components/User/UserAddAddress";
const UserAddAddressPage = () => {
  return (
    <Container className="py-5">
    <Row>
      <Col sm="12" md="2">
        <UserSideBar />
      </Col>
      <Col sm="12" md="10">
        <UserAddAddress/>
      </Col>
    </Row>
  </Container>
  )
}

export default UserAddAddressPage
