import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css'
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
