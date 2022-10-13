import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductForm from './components/ProductForm/ProductForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/products" element={<ProductList/>}></Route>
          <Route path="/addproduct" element={<ProductForm/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
