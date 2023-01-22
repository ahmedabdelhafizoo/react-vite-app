import PropTypes from "prop-types";
import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import SVG from "react-inlinesvg";
import AppRating from "@/components/UI/AppRating";
import { getImageUrl } from "@/helpers";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbsSwiper: null,
      selectedSize: props.product.sizes[0],
      selectedColor: props.product.colors[0],
      quantity: 1,
    };
  }

  handleSwipe = (value) => {
    this.setState({
      thumbsSwiper: value,
    });
  };

  updateQuantity = (quantity) => {
    this.setState({ quantity });
  };

  handleAddToCart = () => {
    let { selectedSize, selectedColor } = this.state;
    let product = {
      ...this.props.product,
      quantity: this.state.quantity,
      selectedSize,
      selectedColor,
    };
    this.props.addToCart(product);
    this.updateQuantity(1)
  };

  render() {
    return (
      <div className="product-details">
        <div className="container">
          <div className="row justify-content-between products-list pt-0">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{
                  swiper:
                    this.state.thumbsSwiper &&
                    !this.state.thumbsSwiper.destroyed
                      ? this.state.thumbsSwiper
                      : null,
                }}
                modules={[Navigation, Thumbs]}
                navigation={{
                  nextEl: "#main-slider-next-arrow",
                  prevEl: "#main-slider-prev-arrow",
                }}
                className="main-slider"
              >
                {this.state.selectedColor.images.map((image, index) => (
                  <SwiperSlide key={index} className="main-slider__item">
                    <img src={image} alt="product image" />
                  </SwiperSlide>
                ))}
                <span className="icon-360">
                  <img src={getImageUrl("icons/360.svg")} alt="360 icon" />
                </span>
              </Swiper>

              <div className="thumbs-slider">
                <div
                  className="header__slider__arrow"
                  id="main-slider-prev-arrow"
                >
                  <SVG src={getImageUrl("icons/arrow-left.svg")} />
                </div>
                <Swiper
                  onSwiper={this.handleSwipe}
                  loop={true}
                  spaceBetween={10}
                  breakpoints={{
                    400: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                  watchSlidesProgress={true}
                  modules={[Thumbs]}
                >
                  {this.state.selectedColor.images.map((image, index) => (
                    <SwiperSlide key={index} className="thumbs-slider__item">
                      <img src={image} alt="product image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className="header__slider__arrow"
                  id="main-slider-next-arrow"
                >
                  <SVG src={getImageUrl("icons/arrow-right.svg")} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5 product-card ">
              <div className="card__brand">
                <img src={this.props.product.brand} alt="brand image" />
              </div>
              <h3 className="product-card__title mt-3 mb-2">
                {this.props.product.name}
              </h3>
              <strong className="product-card__category">
                {this.props.product.category}
              </strong>
              <div className="card__rating mt-0">
                <AppRating
                  ratingValue={this.props.product.rate.value}
                  id={this.props.product.id}
                />
                {this.props.product.rate.value} of 5
                <span>{this.props.product.rate.number} Rates</span>
              </div>
              <div className="card__price">
                <p className="price">
                  {this.props.product.price} <span>LE</span>
                </p>
                {this.props.product.oldPrice && (
                  <p className="old-price">
                    <del>
                      {this.props.product.oldPrice.value} <span>LE</span>
                    </del>
                    <span className="discount">
                      {this.props.product.oldPrice.discount} OFF
                    </span>
                  </p>
                )}
              </div>
              <hr />
              <h3 className="product-card__title mb-3">Size</h3>
              <div className="product-card__options">
                {this.props.product.sizes.map((size) => (
                  <label
                    key={size.id}
                    className={`${
                      this.state.selectedSize.id === size.id && "active"
                    }`}
                  >
                    <input
                      type="radio"
                      name="product-size"
                      value={size.id}
                      checked={this.state.selectedSize.id === size.id}
                      onChange={() => this.setState({ selectedSize: size })}
                    />
                    {size.text}
                  </label>
                ))}
              </div>
              <hr />
              <h3 className="product-card__title mb-3">Color</h3>
              <div className="product-card__options product-card__options--lg">
                {this.props.product.colors.map((color) => (
                  <label
                    key={color.id}
                    className={`${
                      this.state.selectedColor.id === color.id && "active"
                    }`}
                  >
                    <input
                      type="radio"
                      name="product-color"
                      value={color.id}
                      checked={this.state.selectedColor.id === color.id}
                      onChange={() => this.setState({ selectedColor: color })}
                    />
                    <img src={color.images[0]} alt="product image" />
                  </label>
                ))}
              </div>
              <hr />
              <div className="product-card__quantity">
                <h3 className="product-card__title mb-3">Quantity</h3>
                <div className="product-card__quantity__form">
                  <button
                    className="button button--secondary"
                    disabled={this.state.quantity <= 1}
                    onClick={() => this.updateQuantity(this.state.quantity - 1)}
                  >
                    <SVG src={getImageUrl("icons/minus.svg")} />
                  </button>
                  <input
                    type="number"
                    className="form__input"
                    value={this.state.quantity}
                    onChange={(e) => this.updateQuantity(+e.target.value)}
                  />
                  <button
                    className="button button--secondary"
                    onClick={() => this.updateQuantity(this.state.quantity + 1)}
                  >
                    <SVG src={getImageUrl("icons/plus.svg")} />
                  </button>
                </div>
              </div>
              <div className="product-card__actions">
                <button
                  className="button button--primary col"
                  disabled={this.state.quantity < 1}
                  onClick={this.handleAddToCart}
                >
                  Add To Cart
                </button>
                <button className="button button--secondary col">
                  Pickup From Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// validate props
ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductDetails;
