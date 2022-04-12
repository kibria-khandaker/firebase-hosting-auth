import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Shop from "./Pages/Products/Shop";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
