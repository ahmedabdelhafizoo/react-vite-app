import { Component, lazy, Suspense } from "react";
const ShoppingCart = lazy(() => import("@/components/cart/ShoppingCart"));
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import Home from "@/pages/Home";
import data from "@/services/Data";

class App extends Component {
  state = {
    showCart: false,
    cart: [],
  };

  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  addToCart = (product) => {
    let { cart } = this.state;
    let targetItem = cart.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize.id === product.selectedSize.id &&
        item.selectedColor.id === product.selectedColor.id
    );
    if (targetItem) {
      targetItem.quantity += product.quantity;
    } else {
      cart.push(product);
    }
    this.setState({
      cart,
    });
  };

  removeProduct = (product) => {
    let { cart } = this.state;
    let targetIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.selectedSize.id === product.selectedSize.id &&
        item.selectedColor.id === product.selectedColor.id
    );
    if (targetIndex >= 0) {
      cart.splice(targetIndex, 1);
      this.setState({
        cart,
      });
    }
  };

  cartItemsCount = () =>
    this.state.cart.reduce((prev, product) => (prev += product.quantity), 0);

  cartItemsTotalPrice = () =>
    this.state.cart.reduce(
      (prev, current) => (prev += current.price * current.quantity),
      0
    );

  render() {
    return (
      <>
        <AppHeader
          offers={data.offers}
          categories={data.categories}
          toggleCart={this.toggleCart}
          cartItemsCount={this.cartItemsCount()}
        />
        <Home data={data} addToCart={this.addToCart} />
        <AppFooter />

        {this.state.showCart && (
          <Suspense>
            <ShoppingCart
              cart={this.state.cart}
              cartItemsTotalPrice={this.cartItemsTotalPrice()}
              toggleCart={this.toggleCart}
              removeProduct={this.removeProduct}
            />
          </Suspense>
        )}
      </>
    );
  }
}
export default App;
