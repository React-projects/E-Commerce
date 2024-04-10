import CategoryHeader from "../../Components/Category/CategoryHeader"
import RatingProduct from "../../Components/Rate/RatingProduct"
import ProductsDetails from "../../Components/products/ProductsDetails"
import CardProductsContainer from "../../Components/products/CardProductsContainer"

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
