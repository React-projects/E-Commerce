import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartDiscount from "../../Components/Cart/CartDiscount";

function CartPage() {
  return (
    <Container className="py-4">
        <h3 className="cart-title">عربه التسوق</h3>
      <Row>
        <Col xs="12" md="9">
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
        <Col xs="6" md="3">
            <CartDiscount/>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
