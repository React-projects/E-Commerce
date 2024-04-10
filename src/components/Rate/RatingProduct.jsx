import { Container, Row, Col } from "react-bootstrap";
import { images } from "../../assets/Imports/images";
import RatePost from "./RatePost";
import RateItem from "./RateItem";
import Pagination from "../Utility/Pagination";
function RatingProduct() {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img
            className="mt-2"
            src={images.rate}
            alt=""
            height="16px"
            width="16px"
          />
          <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
        </Col>
      </Row>

      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <Pagination/>
    </Container>
  );
}

export default RatingProduct;
