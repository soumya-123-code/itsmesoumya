import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const preloadResources = () => {
  // List of critical fonts and resources
  const resources = [
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', as: 'style' },
    { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap', as: 'style' },
    // Add other key resources as needed
  ];
  
  resources.forEach(resource => {
    const link = document.createElement('link');
    Object.keys(resource).forEach(attr => {
      link[attr] = resource[attr];
    });
    document.head.appendChild(link);
  });
};

// Execute preload
preloadResources();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
