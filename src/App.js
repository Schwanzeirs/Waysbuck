import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import IncomeTransaction from './pages/admin/Income-transaction';
import Main from './pages/auth/Main';
import CustomerDetail from './pages/customer/Customer-detail';
import DetailProduct from './pages/customer/Detail-product';
import Home from './pages/customer/Home';
import MyCart from './pages/customer/My-cart';
import AddDrink from './pages/admin/Add-drink';
import AddTopping from './pages/admin/Add-topping';

function App() {
  return (
    <Router>
    <div>
      <main />
    </div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/customer-detail" element={<CustomerDetail />} />
        <Route exact path="/my-cart" element={<MyCart />} />
        <Route exact path="/add-drink" element={<AddDrink />} />
        <Route exact path="/add-topping" element={<AddTopping />} />
        <Route exact path="/detail-product" element={<DetailProduct />} />
        <Route exact path="/income-transaction" element={<IncomeTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;
