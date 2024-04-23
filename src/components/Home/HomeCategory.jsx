import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GetAllCategoriesData from "../../redux/Actions/categoryAction";

const HomeCategory = ({ title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCategoriesData());
  }, [dispatch]);

  const category = useSelector((state) => state.allcategoryData.category);

  const loading = useSelector((state) => state.allcategoryData.loading);

  console.log(category.data);
  console.log(loading);
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];

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
