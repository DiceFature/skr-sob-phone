import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 全局样式
import 'themes/all.scss'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
