import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({title}) => (
  <div className="spinner-wrapper text-center">
    <div className="spinner">
      <div className="spinner-icon">
        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      </div>
      <div className="loading-title">
        {title}
      </div>
    </div>
  </div>
);

Spinner.propTypes = {
  title: PropTypes.string
};

Spinner.defaultProps = {
  title: ''
};

export default Spinner;
