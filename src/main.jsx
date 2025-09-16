// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import CartProvider from './store/CartContext.jsx';
import LSVisibilityProvider from './store/LSVisibilityCtx.jsx';
import { ProductCtxProvider } from './store/productContext.jsx';
import AuthProvider from './store/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AuthProvider>
    <LSVisibilityProvider>
      <ProductCtxProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductCtxProvider>
    </LSVisibilityProvider>
  </AuthProvider>
  // </StrictMode>
);
