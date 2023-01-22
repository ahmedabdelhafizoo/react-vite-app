import { getImageUrl } from "@/helpers";

const data = {
  offers: [
    {
      id: 1,
      description: "Valentine’s Day Offers! Buy Two Get 1 Free",
      path: "##",
    },
    {
      id: 2,
      description: "Valentine’s Day Offers! Buy Two Get 2 Free",
      path: "##",
    },
    {
      id: 3,
      description: "Valentine’s Day Offers! Buy Two Get 3 Free",
      path: "##",
    },
    {
      id: 4,
      description: "Valentine’s Day Offers! Buy Two Get 4 Free",
      path: "##",
    },
  ],
  categories: [
    {
      text: "Men",
      path: "##",
    },
    {
      text: "Women",
      path: "##",
    },
    {
      text: "Unisex",
      path: "##",
    },
    {
      text: "Kids",
      path: "##",
    },
    {
      text: "Best Sellers",
      path: "##",
    },
    {
      text: "New Arrivals",
      path: "##",
    },
    {
      text: "Offers",
      path: "##",
      active: true,
    },
  ],
  breadcrumbs: [
    { text: "Men", path: "#" },
    { text: "Clothing", path: "#" },
    { text: "Tops", path: "#" },
    { text: "Adidas", path: "#" },
    { text: "Adidas Black T-Shirt" },
  ],
  products: [
    {
      id: 1,
      image: getImageUrl("similar-products/1.png"),
      brand: getImageUrl("adidas.svg"),
      name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit 1.",
      rate: 5,
      shippingInfo: {
        from: "UK",
        to: "Egypt",
        days: 5,
      },
      price: 500,
      oldPrice: {
        value: 1000,
        discount: "50%",
      },
    },
    {
      id: 2,
      image: getImageUrl("similar-products/2.png"),
      brand: getImageUrl("adidas.svg"),
      name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit 2.",
      rate: 4,
      shippingInfo: {
        from: "Egypt",
        to: "UK",
        days: 4,
      },
      price: 400,
    },
    {
      id: 3,
      image: getImageUrl("similar-products/3.png"),
      brand: getImageUrl("adidas.svg"),
      name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit 3.",
      rate: 3,
      shippingInfo: {
        from: "Egypt",
        to: "Egypt",
        days: 1,
      },
      price: 800,
      oldPrice: {
        value: 1000,
        discount: "20%",
      },
    },
    {
      id: 4,
      image: getImageUrl("similar-products/4.png"),
      brand: getImageUrl("adidas.svg"),
      name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit 4.",
      rate: 2,
      shippingInfo: {
        from: "UK",
        to: "Egypt",
        days: 2,
      },
      price: 900,
      oldPrice: {
        value: 1000,
        discount: "10%",
      },
    },
    {
      id: 5,
      image: getImageUrl("similar-products/1.png"),
      brand: getImageUrl("adidas.svg"),
      name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit 5.",
      rate: 3,
      shippingInfo: {
        from: "Egypt",
        to: "Egypt",
        days: 1,
      },
      price: 200,
      oldPrice: {
        value: 1000,
        discount: "80%",
      },
    },
    {
      id: 6,
      image: getImageUrl("similar-products/2.png"),
      brand: getImageUrl("adidas.svg"),
      name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit 6.",
      rate: 5,
      shippingInfo: {
        from: "US",
        to: "Egypt",
        days: 3,
      },
      price: 800,
      oldPrice: {
        value: 1000,
        discount: "20%",
      },
    },
  ],
  productDetails: {
    id: 10,
    brand: getImageUrl("adidas.svg"),
    name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    category: "Men",
    rate: {
      value: 4,
      number: 22,
    },
    price: 800,
    oldPrice: {
      value: 1000,
      discount: "20%",
    },
    sizes: [
      { id: 1, text: "Small" },
      { id: 2, text: "Medium" },
      { id: 3, text: "Large" },
      { id: 4, text: "X Large" },
      { id: 5, text: "XX Large" },
    ],
    colors: [
      {
        id: 1,
        text: "Black",
        images: [
          "https://m.media-amazon.com/images/I/31itPSBy0GL._AC_SY675_.jpg",
          "https://m.media-amazon.com/images/I/41stTjoBYpL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/41XC5E7YutL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/31-LRxwqtfL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/31NCCgy0SlL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/51bAtlKzq-L._AC_SY535_.jpg",
        ],
      },
      {
        id: 2,
        text: "White",
        images: [
          "https://m.media-amazon.com/images/I/51bIHXyEgQL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/51E59aALfBL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/51LgXD0MnHL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/51e2Qpo6clL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/41yQKz95tbL._AC_SY535_.jpg",
          "https://m.media-amazon.com/images/I/51PDhivAJFL._AC_SY535_.jpg"
        ],
      },
    ],
  },
};

export default data;
