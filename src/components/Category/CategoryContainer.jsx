import CategoryCard from "./CategoryCard";
import { Container, Row } from "react-bootstrap";
import { images } from "../../assets/Imports/images";

function CategoryContainer() {
  return (
    <Container className="py-4">
      <h3 className="admin-content-text">كل التصنيفات</h3>
      <Row className="my-4 ">
        <CategoryCard
          img={images.clothe}
          background="#F4DBA5"
          title="اجهزه منزليه"
        />
        <CategoryCard
          img={images.cat2}
          background="#0034FF"
          title="ادوات مطبخ"
        />
        <CategoryCard
          img={images.labtop}
          background="#FFD3E8"
          title="تخفيضات"
        />
        <CategoryCard
          img={images.clothe}
          background="#55CFDF"
          title="ملابس رجال"
        />
        <CategoryCard img={images.sale} background="#FF6262" title="لاتوبس" />
        <CategoryCard
          img={images.pic}
          background="#F4DBA5"
          title=" ملابس اطفال "
        />
        <CategoryCard
          img={images.clothe}
          background="#F4DBA5"
          title="اجهزه منزليه"
        />
        <CategoryCard
          img={images.cat2}
          background="#0034FF"
          title="ادوات مطبخ"
        />
        <CategoryCard
          img={images.labtop}
          background="#FFD3E8"
          title="تخفيضات"
        />
        <CategoryCard
          img={images.clothe}
          background="#55CFDF"
          title="ملابس رجال"
        />
        <CategoryCard img={images.sale} background="#FF6262" title="لاتوبس" />
        <CategoryCard
          img={images.pic}
          background="#F4DBA5"
          title=" ملابس اطفال "
        />
        <CategoryCard
          img={images.cat2}
          background="#0034FF"
          title="ادوات مطبخ"
        />
        <CategoryCard
          img={images.labtop}
          background="#FFD3E8"
          title="تخفيضات"
        />
        <CategoryCard
          img={images.clothe}
          background="#55CFDF"
          title="ملابس رجال"
        />
        <CategoryCard img={images.sale} background="#FF6262" title="لاتوبس" />
        <CategoryCard
          img={images.pic}
          background="#F4DBA5"
          title=" ملابس اطفال "
        />
      </Row>
    </Container>
  );
}

export default CategoryContainer;
