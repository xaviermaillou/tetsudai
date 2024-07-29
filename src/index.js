import React from 'react';
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageNotFound from './components/404/PageNotFound';
import isElectron from 'is-electron';

if ('serviceWorker' in navigator && !isElectron()) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

const Router = isElectron() ? HashRouter : BrowserRouter


createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      {isElectron() && <div class="titleBar" />}
      <CookiesProvider>
        <Router>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/:element/:id' element={<App />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </CookiesProvider>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
