import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles'


render(
  // <> this is a fragment
  <>  
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);