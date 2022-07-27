import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Switch } from 'react-router';
import App from './App';
import Home from './routes/Home';
import SearchPage from './routes/SearchPageContainer';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import UserProfiles from './routes/user-profiles';
import UserProfile from './components/user-profile';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        {/* <Route path="profile" element={<UserProfiles />}>
            <Route path=":profileId" element={<UserProfile />} />
          </Route> */}
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
    <ColorModeScript />
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
