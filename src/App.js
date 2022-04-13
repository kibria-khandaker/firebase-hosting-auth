import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from "./Login/Login";
import RequireAuth from './Login/RequireAuth';
import About from './Pages/About/About';
import GetDiscount from "./Pages/GetDiscount/GetDiscount";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import DetailsProduct from './Pages/Products/DetailsProduct';
import Shop from "./Pages/Products/Shop";
import SignUp from "./SignUp/SignUp";

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:productId" element={<DetailsProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/discount" element={
          <RequireAuth>
            <GetDiscount />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
