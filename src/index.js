import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Simulation from './simulation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="content">
      <Simulation/>
    </div>
);
