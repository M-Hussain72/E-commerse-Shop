import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import Category from './pages/Category';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/header';
import Footer from './components/Footer';
import UserAccount from './pages/userAccount';
import { PrivateRoute } from './components/PrivateRoute';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<Category />} />
          <Route
            path="/:productName/:productId"
            element={<ProductDetailPage />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/myProfile"
            element={
              <PrivateRoute>
                <UserAccount />
              </PrivateRoute>
            }
          />
        </Routes>
        <Login />
        <SignUp />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
