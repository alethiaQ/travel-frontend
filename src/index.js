import { ColorModeScript } from '@chakra-ui/react';
import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const LazyApp = lazy(() => import('./App'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <LazyApp />
      <ColorModeScript />
    </Provider>
  </BrowserRouter>
);
// path = * is "Not Found Page"

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
