import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserProfile from "../../Components/User/UserProfile";
const UserProfilePage = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <UserSideBar />
        </Col>
        <Col sm="12" md="10">
          <UserProfile/>
        </Col>
      </Row>
    </Container>
  )
}

export default UserProfilePage
