import { getImageUrl } from "@/helpers";

export const headerData = {
  topNavLinks: [
    {
      text: "Contact Us",
      icon: "phone",
      path: "##",
    },
    {
      text: "Track Order",
      icon: "cart",
      path: "##",
    },
    {
      text: "Find A Store",
      icon: "marker",
      path: "##",
    },
    {
      text: "Wishlist",
      icon: "heart",
      path: "##",
      hideInLgScreens: true,
    },
    {
      text: "Login",
      icon: "user",
      path: "##",
      hideInLgScreens: true,
    },
  ],
  mainNavLinks: [
    {
      text: "Wishlist",
      icon: "heart",
      path: "##",
    },
    {
      text: "Login",
      icon: "user",
      path: "##",
    },
  ]
}

export const footerData = {
  mainLinks: [
    {
      text: "About Us",
      path: "##",
    },
    {
      text: "Contact Us",
      path: "##",
    },
    {
      text: "Track Order",
      path: "##",
    },
    {
      text: "Terms & Conditions",
      path: "##",
    },
    {
      text: "Privacy Policy",
      path: "##",
    },
    {
      text: "Sell With Us",
      path: "##",
    },
    {
      text: "Shipping And Returns",
      path: "##",
    },
  ],
  socialsLinks: [
    {
      image: getImageUrl("socials/facebook.svg"),
      url: "##",
    },
    {
      image: getImageUrl("socials/linkedin.svg"),
      url: "##",
    },
    {
      image: getImageUrl("socials/instagram.svg"),
      url: "##",
    },
    {
      image: getImageUrl("socials/twitter.svg"),
      url: "##",
    },
  ],
  copyrightImages: [
    getImageUrl("footer/1.png"),
    getImageUrl("footer/2.png"),
    getImageUrl("footer/3.png"),
  ],
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia",
    "m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis",
  ],
};
