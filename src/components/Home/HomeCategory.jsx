import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import useHomeCategoryHook from "../../CustomHook/Category/useHomeCategoryHook";

const HomeCategory = ({ title }) => {
  const [colors, category, loading] = useHomeCategoryHook();

  return (
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد" PathText="allcategory" />
      <Row className="my-2 ">
        {loading === false ? (
          category.data ? (
            category.data.slice(0, 6).map((item, index) => {
              return (
                <CategoryCard
                  img={item.image}
                  key={item.id}
                  background={colors[index]}
                  title={item.name}
                />
              );
            })
          ) : (
            <h4> NO Data</h4>
          )
        ) : (
          <Spinner animation="grow" variant="dark" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
