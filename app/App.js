import React, { Component } from 'react';
import {Provider} from 'react-redux';

import FileUploadPage from './modules/FileUpload/components/FileUploadPage';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FileUploadPage />
      </Provider>
    );
  }
}

export default App;
