import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/User/UserSideBar";
import UserAllAddress from "../../components/User/UserAllAddress";
const UserAllAddressPage = () => {
  return (
    <Container className="py-5">
    <Row>
      <Col sm="12" md="2">
        <UserSideBar />
      </Col>
      <Col sm="12" md="10">
        <UserAllAddress/>
      </Col>
    </Row>
  </Container>
  )
}

export default UserAllAddressPage
