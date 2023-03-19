import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";
import { UserProvider } from "./context/UserContext";
import SignIn from "./components/SignIn/SignIn";
import PrivateRoute from "./components/SignIn/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/signIn' element={<SignIn />} />
            <Route path="/" element={<PrivateRoute><ItemListContainer /></PrivateRoute>} />
            <Route path="/item/:id" element={<PrivateRoute><ItemDetail /></PrivateRoute>} />
            <Route path="/category/:categoryId" element={<PrivateRoute><ItemListContainer /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          </Routes>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
