import CategoryCard from "./CategoryCard";
import { Container, Row, Spinner } from "react-bootstrap";

function CategoryContainer({data,loading}) {
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
          data? (
            data.map((item) => {
              return (
                <CategoryCard
                  key={item._id}
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
