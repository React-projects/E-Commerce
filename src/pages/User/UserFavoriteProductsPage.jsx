import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/User/UserSideBar";
import UserFavoriteProducts from "../../components/User/UserFavoriteProducts";
function UserFavoritePage() {
  return (
    <Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <UserSideBar />
        </Col>
        <Col sm="12" md="10">
          <UserFavoriteProducts/>
        </Col>
      </Row>
    </Container>
  );
}

export default UserFavoritePage;
