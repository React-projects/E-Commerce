import CategoryCard from "./CategoryCard";
import { Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GetAllCategoriesData from "../../redux/Actions/categoryAction";

function CategoryContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCategoriesData());
  }, [dispatch]);

  const category = useSelector((state) => state.allcategoryData.category);
  const loading = useSelector((state) => state.allcategoryData.loading);

  console.log(category.products);
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
    <Container className="py-4">
      <h3 className="admin-content-text">كل التصنيفات</h3>
      <Row className="my-4 ">
        {loading === false ? (
          category.data ? (
            category.data.map((item, index) => {
              return (
                <CategoryCard
                  key={item.id}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
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
}

export default CategoryContainer;
