
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Utility/SubTitle";
import { images } from "../../assets/Imports/images";

const BrandFeatured = ({ title, btntitle }) => {
 
  return (
    <div className="my-3">
      <Container>
        
        <SubTitle title={title} btntitle={btntitle} PathText="/allbrands" />

        <Row className="my-1 justify-content-between">
          <BrandCard img={images.brand1} />
          <BrandCard img={images.brand2} />
          <BrandCard img={images.brand3} />
          <BrandCard img={images.brand2} />
          <BrandCard img={images.brand1} />
          <BrandCard img={images.brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandFeatured;