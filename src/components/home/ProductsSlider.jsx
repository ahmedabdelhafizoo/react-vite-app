import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import AppRating from "@/components/UI/AppRating";
import { getImageUrl } from "@/helpers";

const ProductsSlider = ({ products }) => {
  return (
    <section className="products-list">
      <div className="container">
        <div className="page-heading">
          <h2 className="page-heading__title">Similar Products</h2>
          <p className="page-heading__desc">You may like these products also</p>
        </div>
        <Swiper
          scrollbar={true}
          navigation={true}
          spaceBetween={32}
          breakpoints={{
            500: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          modules={[Scrollbar]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card">
                <div className="card__img-container">
                  <img
                    src={product.image}
                    alt="product image"
                    className="product-img"
                  />
                  <span className="icon-360">
                    <img src={getImageUrl("icons/360.svg")} alt="360 icon" />
                  </span>
                </div>
                <div className="card__body">
                  <h3 className="card__title">{product.name}</h3>
                  <div className="card__details">
                    <div className="card__price">
                      <p className="price">
                        {product.price} <span>LE</span>
                      </p>
                      {product.oldPrice && (
                        <p className="old-price">
                          <del>
                            {product.oldPrice.value} <span>LE</span>
                          </del>
                          <span className="discount">
                            {product.oldPrice.discount}
                          </span>
                        </p>
                      )}
                    </div>
                    <div className="card__brand">
                      <img src={product.brand} alt="brand image" />
                    </div>
                  </div>
                  <div className="card__rating">
                    <AppRating ratingValue={product.rate} id={product.id} />
                    {product.rate} of 5
                  </div>
                  <ul className="card__shipping-info">
                    <li>
                      <span>From: </span>
                      <strong>{product.shippingInfo.from}</strong>
                    </li>
                    <li>
                      <span>To: </span>
                      <strong>{product.shippingInfo.to}</strong>
                    </li>
                    <li>
                      <span>in: </span>
                      <strong>{product.shippingInfo.days} Days</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// validate props
ProductsSlider.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsSlider;
