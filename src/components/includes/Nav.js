import {Link, NavLink} from 'react-router-dom';
import './../../App.css';
import Home from '../../pages/Home';
import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import RegistrationPage from '../../pages/RegistrationPage';
import style from './Nav.module.css';



function Nav() {
    
   return (
     <header>
        <nav className={style.navBar}>
      <ul className={style.leftnavBar}>
     <li> <Link to="/" > Home</Link> </li> 
     <li><Link to="/ProductsPage" > Products</Link></li>
     <li><Link to="RegistrationPage">Registration</Link></li>
     <li><Link to="LoginPage">Login</Link></li>
      </ul>
      <ul className={style.rightnavBar}>
      <li><NavLink to="/AddProduct">Add Product</NavLink></li>
      <li> <NavLink to="/AdminProducts">Admin Products</NavLink></li>
      </ul>
        </nav>
     </header>
  )
}

export default Nav