import { getImageUrl } from "@/helpers";
import { footerData } from "@/constants";

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="footer__logo">
              <img src={getImageUrl("logo-yellow.svg")} alt="logo image" />
            </div>
            {footerData.paragraphs.map((paragraph, index) => (
              <p className="footer__desc" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="col-lg-7">
            <div className="footer__details">
              <h2 className="footer__heading">Subscribe to our newsletter</h2>
              <div className="footer__form">
                <input
                  type="email"
                  className="form__input footer__form__input"
                  placeholder="Enter Your Mail"
                />
                <button className="button button--secondary footer__form__btn">
                  Subscribe
                  <img
                    src={getImageUrl("icons/subscribe.svg")}
                    alt="logo image"
                  />
                </button>
              </div>
              <div className="row">
                <div className="col-6">
                  <ul className="footer__links">
                    {footerData.mainLinks.map((link) => (
                      <li className="footer__links__item" key={link.text}>
                        <a href={link.path}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="footer__links social-links">
                    {footerData.socialsLinks.map((link) => (
                      <li className="footer__links__item" key={link.image}>
                        <a href={link.url}>
                          <img src={link.image} alt="social icon" /> /YESHTERY
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer__desc">© 2021 yeshtery, all rights reserved.</p>
          <div className="footer__copyright__images">
            {footerData.copyrightImages.map((image, index) => (
              <img src={image} key={index} alt="copyright image" />
            ))}
          </div>
          <div className="footer__copyright__company">
            <span>Powered By</span>
            <img src={getImageUrl("footer/company.svg")} alt="company logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
