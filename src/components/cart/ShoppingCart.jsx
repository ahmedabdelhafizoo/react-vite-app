import PropTypes from "prop-types";
import SVG from "react-inlinesvg";
import { getImageUrl } from "@/helpers";
import CartItem from "@/components/cart/CartItem";

const ShoppingCart = ({
  cart,
  cartItemsTotalPrice,
  toggleCart,
  removeProduct,
}) => {
  return (
    <div className="cart show" onClick={toggleCart}>
      <div
        className="cart__container d-flex flex-column shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart__header">
          <h2 className="cart__title">My Cart</h2>
          <span className="cart__close-icon" onClick={toggleCart}>
            <SVG src={getImageUrl("icons/close.svg")} />
          </span>
        </div>

        {cart.length ? (
          <div className="cart-items custom-scroll">
            {cart.map((product, index) => (
              <CartItem
                product={product}
                key={index}
                removeProduct={removeProduct}
              />
            ))}
          </div>
        ) : (
          <div className="empty-cart custom-scroll">
            <div className="p-5">
              <img
                src={getImageUrl("cart.svg")}
                alt="cart image"
                width="auto"
                height="auto"
              />
              <h6 className="text-muted mt-5">Your cart Is Empty!</h6>
            </div>
          </div>
        )}

        <div className="cart__footer mt-auto">
          {!!cartItemsTotalPrice && (
            <h6 className="cart__footer__total">
              Total: {cartItemsTotalPrice} LE
            </h6>
          )}
          <button className="button button--secondary col">Review Cart</button>
          <button className="button button--primary col">
            Complete Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

// validate props
ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  cartItemsTotalPrice: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ShoppingCart;
