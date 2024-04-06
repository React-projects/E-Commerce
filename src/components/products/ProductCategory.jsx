import { Row } from "react-bootstrap";
import { Container  } from "react-bootstrap";
import ProductCard from "./productsCard";
import SubTitle from "../Utility/SubTitle";

const CardProductsContainer = ({ title, btntitle }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle}/>
      <Row W>
        <ProductCard title="1" />
        <ProductCard title="2" />
        <ProductCard title="3" />
        <ProductCard title="4" />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;