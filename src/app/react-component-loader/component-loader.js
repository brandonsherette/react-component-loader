import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './spinner';

require('./component-loader.scss');

class ComponentLoader extends Component {
  render() {
    const { children, error, handleReload, isLoaded, loadingTitle, showContentOnError } = this.props;

    if (error) {
      return (
        <div className="component-loader">
          <div className="alert alert-danger text-center">
            <div>{error}</div>
            {handleReload && (
              <div className="btn-reload-wrapper">
                <button type="button" className="btn btn-primary" onClick={handleReload}><i className="fa fa-refresh"></i>&nbsp;Retry</button>
              </div>
            )}
          </div>
          {showContentOnError && (
            <div>
              {children}
            </div>
          )}
        </div>
      );
    }

    if (!isLoaded) {
      return (
        <div className="component-loader">
          <Spinner title={loadingTitle} />
        </div>
      );
    }

    return (
      <div className='component-loader'>
        {children}
      </div>
    );
  }
}

ComponentLoader.propTypes = {
  error: PropTypes.any,
  handleReload: PropTypes.func,
  isLoaded: PropTypes.bool.isRequired,
  loadingTitle: PropTypes.string,
  showContentOnError: PropTypes.bool,
}

ComponentLoader.defaultProps = {
  error: null,
  handleReload: null,
  loadingTitle: null,
  showContentOnError: false,
}

export default ComponentLoader;
