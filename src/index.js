import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoomProvider } from './Context';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
