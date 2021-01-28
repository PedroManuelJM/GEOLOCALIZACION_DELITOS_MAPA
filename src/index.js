import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL + "/"}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
