import PropTypes from "prop-types";
import { Component } from "react";
import ProductsSlider from "@/components/home/ProductsSlider";
import ProductDetails from "@/components/home/ProductDetails";
import AppBreadcrumbs from "@/components/UI/AppBreadcrumbs";

class Home extends Component {
  render() {
    return (
      <>
        <AppBreadcrumbs links={this.props.data.breadcrumbs} />
        <ProductDetails product={this.props.data.productDetails} addToCart={this.props.addToCart} />
        <ProductsSlider products={this.props.data.products} />
      </>
    );
  }
}

// validate props
Home.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default Home;
