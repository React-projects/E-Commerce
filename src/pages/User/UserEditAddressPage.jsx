import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserEditAddress from "../../Components/User/UserEditAddress";
const UserEditAddressPage = () => {
  return (
    <Container className="py-5">
    <Row>
      <Col sm="12" md="2">
        <UserSideBar />
      </Col>
      <Col sm="12" md="10">
        <UserEditAddress/>
      </Col>
    </Row>
  </Container>
  )
}

export default UserEditAddressPage

