import React, { Component } from 'react';
import ComponentLoader from './react-component-loader/index';

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorLoading: null,
      isLoaded: false,
      handleReload: null,
      loadingTitle: 'Loading...',
    };
  }

  handleUpdateState(nextState) {
    this.setState(nextState);
  }

  render() {
    const { errorLoading, handleReload, isLoaded, loadingTitle } = this.state;

    return (
      <div className="app-component container text-center">
        <h1>Loading States</h1>
        <div className="btn-group">
          <button
            onClick={this.handleUpdateState.bind(this, {
              errorLoading: null,
              handleReload: null,
              isLoaded: false,
              loadingTitle: "Loading...",
            })}
            type="button"
            className="btn btn-primary">Loading (w/ title)</button>
          <button
            onClick={this.handleUpdateState.bind(this, {
              errorLoading: null,
              handleReload: null,
              isLoaded: false,
              loadingTitle: null,
            })}
            type="button"
            className="btn btn-primary">Loading (w/out title)</button>
          <button
            onClick={this.handleUpdateState.bind(this, {
              errorLoading: null,
              handleReload: null,
              isLoaded: true,
              loadingTitle: "Loading...",
            })}
            type="button"
            className="btn btn-primary">Loaded</button>
          <button
            onClick={this.handleUpdateState.bind(this, {
              errorLoading: "Error Loading",
              handleReload: null,
              isLoaded: false,
              loadingTitle: "Loading...",
            })}
            type="button"
            className="btn btn-primary">Error w/o Reload</button>
          <button
            onClick={this.handleUpdateState.bind(this, {
              errorLoading: "Error Loading",
              handleReload: () => { console.debug('Handle Reload'); },
              isLoaded: false,
              loadingTitle: "Loading...",
            })}
            type="button"
            className="btn btn-primary">Error w/ Reload</button>
        </div>
        <ComponentLoader error={errorLoading} handleReload={handleReload} isLoaded={isLoaded} loadingTitle={loadingTitle}>
          <h1>Component Loaded!</h1>
          <p>Content will not be seen since isLoaded is set to false.</p>
        </ComponentLoader>
      </div>
    );
  }
}

export default AppComponent;
