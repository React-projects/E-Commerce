import BrandCard from "./BrandCard";
import { Container, Row } from "react-bootstrap";
import { images } from "../../assets/Imports/images";

function BrandCategory() {
  return (
    <Container className="py-4">
            <h3 className="admin-content-text">كل المركات</h3>

      <Row className="my-1 justify-content-between">
        <BrandCard img={images.brand1} />
        <BrandCard img={images.brand2} />
        <BrandCard img={images.brand3} />
        <BrandCard img={images.brand2} />
        <BrandCard img={images.brand1} />
        <BrandCard img={images.brand3} />
        <BrandCard img={images.brand1} />
        <BrandCard img={images.brand2} />
        <BrandCard img={images.brand3} />
        <BrandCard img={images.brand2} />
        <BrandCard img={images.brand1} />
        <BrandCard img={images.brand3} />
        <BrandCard img={images.brand1} />
        <BrandCard img={images.brand2} />
        <BrandCard img={images.brand3} />
        <BrandCard img={images.brand2} />
        <BrandCard img={images.brand1} />
        <BrandCard img={images.brand3} />
      </Row>
    </Container>
  );
}

export default BrandCategory;
