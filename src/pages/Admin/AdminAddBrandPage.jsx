import { Col, Container, Row } from "react-bootstrap";
import AdminSlideBar from "../../Components/Admin/AdminSlideBar";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";
function AddBrand() {
 



  return (
    <Container className="py-5">
      <Row>
        <Col sm="12" md="2">
          <AdminSlideBar />
        </Col>
        <Col sm="12" md="10">
        <AdminAddBrand/>
        </Col>
      </Row>
    </Container>
  );
}




  


export default AddBrand
