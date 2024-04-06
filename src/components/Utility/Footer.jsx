import { Row } from "react-bootstrap";
import { Container, Col } from "react-bootstrap";
import { images } from "../../assets/Imports/images";


const Footer = () => {
  return (
    <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shroot ">الشروط والاحكام</div>
            <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
            <div className="footer-shroot mx-2">اتصل بنا</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center ">
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={images.phone} alt="" />
              <p className="footer-phone">01069470784</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={images.facebook} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={images.instagram} alt="" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={images.twitter} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;