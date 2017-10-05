# React Component Loader
Shows loading spinner when data is being loaded. Reveals content once data is loaded.

# Versions
## v0.1.3
### Updates
- Content will no longer has a break before it's displayed.

## v0.1.2
### Bugs/Fixes
- Fixed issue with package not using correct filename.

## v0.1.1
### Features
- Added showContentOnError property to ComponentLoader.

### Updates
- Updated ComponentLoader's error property to now accept Node values.

## v0.1.0
### Features
- ComponentLoader Component created.
- isLoaded property added to ComponentLoader.
- error property added to ComponentLoader
- handleReload property added to ComponentLoader
- loadingTitle property added to ComponentLoader

# ComponentLoader Props
- error: String|Node (optional)
  - The loading error to display if there is one.
- handleReload: Function (optional)
  - The function to call if the reload/retry button is pressed.
- isLoaded: Boolean (required)
  - Whether or not your data is loaded and ready to display the children elements.
- loadingTitle: String (optional)
  - The title to display under the loading icon (spinner).
- showContentOnError: Boolean (optional Default: true).
  - Whether or not to show the children content if there is an error. Usefull for forms.

# Example
```js
import React from 'react';
import ComponentLoader from 'react-component-loader';

require('react-component-loader/dist/react-component-loader.css');

export default () => (
  <ComponentLoader 
    error={null}
    handleReload={() => { 
      console.debug('Handle Reload'); 
    }}
    isLoaded={false} 
    loadingTitle="Loading..."
    showContentOnError={false}
  >
    <h1>Component Loaded!</h1>
    <p>Content will not be seen since isLoaded is set to false, unless showContentOnError is set to true.</p>
  </ComponentLoader>
);
```