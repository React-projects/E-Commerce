import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { images } from "../../assets/Imports/images";
import LeftArrowButton from "./Arrows/LeftArrowButton";
import RightArrowButton from "./Arrows/RightArrowButton";

function ProductsGallery() {
  const imagesGallery = [
    {
      original: `${images.mobile}`,
    },
    {
      original: `${images.mobile1}`,
    },
    {
      original: `${images.mobile2}`,
    },
  ];
  return (
    <div  className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-3">
      <ImageGallery
        items={imagesGallery}
        defaultImages={images.mobile}
        isRTL={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        renderLeftNav={LeftArrowButton}
        renderRightNav={RightArrowButton}
      />
      
    </div>
  );
}

export default ProductsGallery;
