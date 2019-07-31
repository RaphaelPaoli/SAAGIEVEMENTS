import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title, buttonTitle, link }) => (
  <div className="sui-l-page-header">
    <div className="sui-l-page-header__primary">
      <div className="sui-l-page-header__title">{title}</div>
    </div>
    <div className="sui-l-page-header__secondary">
      <Link to={link} className="sui-a-button as--primary">
        {buttonTitle}
      </Link>
    </div>
  </div>
);
Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default Header;
