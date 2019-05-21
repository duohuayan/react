import React from 'react';
import ReactDom from 'react-dom';

import './assets/css/base.css';//基础样式引入
import './assets/css/style.css';
import './assets/css/owl.carousel.css';
import './assets/css/owl.theme.default.css';
import './assets/css/materialize.css';
import './assets/css/loaders.css';
import './assets/css/font-awesome.min.css';
import './assets/css/font.css';
import './library/font';


import App from './layouts/App'

import {BrowserRouter} from 'react-router-dom'

ReactDom.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ,
  document.querySelector('#root')
);