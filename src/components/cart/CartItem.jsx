import PropTypes from "prop-types";

const CartItem = ({ product, removeProduct }) => {
  return (
    <div className="item d-flex align-items-center border-bottom">
      <div className="item__img me-3">
        <img src={product.selectedColor.images[0]} alt="item image" className="mw-100 mh-100" />
      </div>
      <div className="flex-grow-1">
        <h6 className="mb-1 item__name">{product.name}</h6>
        <div className="item__info">
          <span>{product.quantity} x {product.price} LE</span>
          -
          <span>{product.selectedSize.text}</span>
          -
          <span>{product.selectedColor.text}</span>
        </div>
        <div className="item__price">
          <span>{product.price * product.quantity} <small>LE</small></span>
          <button className="remove-btn ms-auto button button--secondary" onClick={() => removeProduct(product)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

// validate props
CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default CartItem;
