import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from "./Login/Login";
import About from './Pages/About/About';
import GetDiscount from "./Pages/GetDiscount/GetDiscount";
import Home from './Pages/Home/Home';
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
        <Route path="/about" element={<About />} />
        <Route path="/discount" element={ <GetDiscount/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUp/> } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
