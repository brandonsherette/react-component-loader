import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './spinner';

require('./component-loader.scss');

class ComponentLoader extends Component {
  render() {
    const { children, error, handleReload, isLoaded, loadingTitle } = this.props;

    if (error) {
      return (
        <div className="component-loader text-center">
          <div className="alert alert-danger">
            <p>{error}</p>
            {handleReload && (
              <div>
                <br />
                <button type="button" className="btn btn-primary" onClick={handleReload}><i className="fa fa-refresh"></i>&nbsp;Retry</button>
              </div>
            )}
          </div>
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
  error: PropTypes.string,
  handleReload: PropTypes.func,
  isLoaded: PropTypes.bool.isRequired,
  loadingTitle: PropTypes.string,
}

ComponentLoader.defaultProps = {
  error: null,
  handleReload: null,
  loadingTitle: null,
}

export default ComponentLoader;
