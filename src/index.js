import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import store from "./store";
import showResults from "./showResults";

import registerServiceWorker from './registerServiceWorker';

let store = require('./store').default

require('bootstrap/dist/css/bootstrap.min.css')
require('react-widgets/dist/css/react-widgets.css')
require('./css/react-widgets-overrides.css')
require('./css/react-signature-pad.css')

let render = () => {
  const SimpleForm = require('./SimpleForm').default

  ReactDOM.render(
    <Provider store={store}>
        <SimpleForm onSubmit={showResults} />
    </Provider>,
    document.getElementById('root')
  )
}

render()

registerServiceWorker();
