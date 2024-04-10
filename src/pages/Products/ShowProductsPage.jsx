import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountRules from "../../Components/Utility/SearchCountRules";
import { Container, Row, Col } from "react-bootstrap";
import SearchFilter from "../../Components/Utility/SearchFilter";
import CardProductsContainer from "../../Components/products/CardProductsContainer";
import Pagination from "../../Components/Utility/Pagination";

const ShowProductsPage = () => {
  return (
    <div style={{ minHeight: "740px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountRules title="400 منتح متاح" />

        <Row>
          <Col sm="2" xm="2" md="1">
            <SearchFilter />
          </Col>
          <Col sm="10" xm="10" md="11">
          <CardProductsContainer/>
          </Col>
        </Row>
        <Pagination/>
      </Container>
    </div>
  );
};

export default ShowProductsPage;
