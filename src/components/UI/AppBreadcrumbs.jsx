import PropTypes from "prop-types";

const AppBreadcrumbs = ({ links }) => {
  return (
    <nav className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs__row">
          {links.map((link, index) =>
            link.path ? (
              <a className="breadcrumbs__link" href={link.path} key={index}>
                {link.text}
              </a>
            ) : (
              <span key={index}>{link.text}</span>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

// validate props
AppBreadcrumbs.propTypes = {
  links: PropTypes.array.isRequired,
};

export default AppBreadcrumbs;
