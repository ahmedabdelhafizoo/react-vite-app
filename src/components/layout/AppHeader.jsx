import PropTypes from "prop-types";
import { Component } from "react";
import SVG from "react-inlinesvg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { getImageUrl } from "@/helpers";
import { headerData } from "@/constants";

class AppHeader extends Component {
  state = {
    showHeaderMenu: false,
  };

  toggleHeaderMenu = (e) => {
    e.preventDefault();
    this.setState({ showHeaderMenu: !this.state.showHeaderMenu });
  };

  showCart = (e) => {
    e.preventDefault();
    this.props.toggleCart()
  }

  render() {
    return (
      <header className="header">
        <nav className="header__top-nav">
          <div className="container">
            <div className="header__row">
              <div className="header__logo">
                <img src={getImageUrl("logo.svg")} alt="logo image" />
              </div>
              <div className="header__slider d-none d-xl-flex">
                <div className="header__slider__arrow" id="header-prev-arrow">
                  <SVG src={getImageUrl("icons/arrow-left.svg")} />
                </div>
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={50}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: "#header-next-arrow",
                    prevEl: "#header-prev-arrow",
                    disabledClass: "disabled",
                  }}
                >
                  {this.props.offers.map((offer) => (
                    <SwiperSlide key={offer.id}>
                      <span>{offer.description}</span>
                      <a href={offer.path}> Shop Now</a>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="header__slider__arrow" id="header-next-arrow">
                  <SVG src={getImageUrl("icons/arrow-right.svg")} />
                </div>
              </div>
              <div
                className={`header__side-menu ${
                  this.state.showHeaderMenu && "show"
                }`}
                onClick={this.toggleHeaderMenu}
              >
                <ul
                  className="header__menu"
                  onClick={(e) => e.stopPropagation()}
                >
                  <li className="header__close-icon d-lg-none">
                    <a href="#" onClick={this.toggleHeaderMenu}>
                      <SVG src={getImageUrl("icons/close.svg")} />
                    </a>
                  </li>
                  {headerData.topNavLinks.map((link) => (
                    <li
                      className={`header__menu__item ${
                        link.hideInLgScreens && "d-lg-none"
                      }`}
                      key={link.text}
                    >
                      <a href={link.path} className="header__menu__item__link">
                        <SVG src={getImageUrl(`icons/${link.icon}.svg`)} />
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <SVG
                src={getImageUrl("icons/menu.svg")}
                className="header__menu-icon d-lg-none"
                onClick={this.toggleHeaderMenu}
              />
            </div>
          </div>
        </nav>
        <nav className="header__main-nav">
          <div className="container">
            <div className="header__row">
              <div className="header__search">
                <input
                  type="search"
                  className="form__input form__input--search"
                  placeholder="Search"
                />
              </div>
              <div className="header__brand-img d-none d-xl-block">
                <img src={getImageUrl("adidas.svg")} alt="brand image" />
              </div>
              <ul className="header__menu">
                <li className="header__menu__item">
                  <a href="##" className="header__menu__item__link" onClick={this.showCart}>
                    <SVG src={getImageUrl(`icons/shopping-cart.svg`)} />
                    Cart
                    <span className="counter">{this.props.cartItemsCount}</span>
                  </a>
                </li>
                {headerData.mainNavLinks.map((link) => (
                  <li
                    className="header__menu__item d-none d-lg-block"
                    key={link.text}
                  >
                    <a href={link.path} className="header__menu__item__link">
                      <SVG src={getImageUrl(`icons/${link.icon}.svg`)} />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <nav className="header__bottom-nav">
          <div className="container">
            <ul className="header__categories">
              {this.props.categories.map((category) => (
                <li className="header__categories__item" key={category.text}>
                  <a
                    href={category.path}
                    className={`${category.active && "active"}`}
                  >
                    {category.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

// validate props
AppHeader.propTypes = {
  offers: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  toggleCart: PropTypes.func.isRequired,
  cartItemsCount: PropTypes.number.isRequired,
};

export default AppHeader;
