import AdminAllProductsCard from "./AdminAllProdutsCard";
import { Row } from "react-bootstrap";

const AdminAllProducts = () => {
  return (
    <>

      <h3 className="admin-content-text">اداره جميع المنتجات</h3>
      <Row>
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </Row>
    </>
  );
};

export default AdminAllProducts;
