import { Container, Row } from "react-bootstrap";
import { images } from "../../assets/Imports/images";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitl3";

const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد"  />
      <Row className="my-2 ">
        <CategoryCard img={images.clothe} background="#F4DBA5" title='feufbeuifb' />
        <CategoryCard img={images.cat2} background="#0034FF"title='feufbeuifb'  />
        <CategoryCard img={images.labtop} background="#FFD3E8"title='feufbeuifb'  />
        <CategoryCard img={images.clothe} background="#55CFDF"title='feufbeuifb'  />
        <CategoryCard img={images.sale} background="#FF6262"title='feufbeuifb'  />
        <CategoryCard img={images.pic} background="#F4DBA5" title='feufbeuifb' />
      </Row>
    </Container>
  );
};

export default HomeCategory;