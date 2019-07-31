import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  const link = 'https://http.cat/4O4.jpg';
  return (
    <>
      <div className="sui-g-grid as--stretch as--auto sui-g-grid as--center">
        <img src={link} alt="404 Not Found" />
      </div>
      <div className="sui-h-text-center sui-a-form-feedback as--danger">
        <i className="sui-a-icon as--start as--fa-warning" />
        {error.message}, Please try again :(
      </div>
    </>
  );
};

ErrorMessage.propTypes = { error: PropTypes.object.isRequired };

export default ErrorMessage;
