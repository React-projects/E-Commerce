import CategoryHeader from "../../components/Category/CategoryHeader"
import RatingProduct from "../../components/Rate/RatingProduct"
import ProductsDetails from "../../components/products/ProductsDetails"
import CardProductsContainer from "../../components/products/CardProductsContainer"

function ProductDetailsPage() {
  return (
    <div>
      <CategoryHeader/>
      <ProductsDetails/>
      <RatingProduct/>
      <CardProductsContainer title="منتجات قد تعجبك"/>
      

    </div>
  )
}

export default ProductDetailsPage
