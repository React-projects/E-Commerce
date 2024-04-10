import { Container, Row, Col } from "react-bootstrap";
import ProductsGallery from "./ProductsGallery";
import ProductText from "./ProductText";

function ProductsDetails() {
  return (
    <Container className="py-4">
      <Row>
        <Col lg="4">
          <ProductsGallery/>
        </Col>
        <Col lg="6">
          <ProductText/>
        </Col>
        
      </Row>
    </Container>
  );
}

export default ProductsDetails;
