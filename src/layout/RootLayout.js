import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import cart from '../assest/images/cart.svg'


export default function RootLayout() {
  return (
        <div>
            <header className="p-2 text-primary bg-primary border border-primary">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <h1><NavLink to="/" className="nav-link px-5 text-white">ShopEasy</NavLink></h1>
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><NavLink to="/" className="nav-link px-2 text-white">Home</NavLink></li>
                            <li><NavLink to="products" className="nav-link px-2 text-white">Products</NavLink></li>
                            <li className="nav-item dropdown">
                                <a href="#"
                                className="nav-link px-2 text-white dropdown-toggle"
                                id="categoryDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                                Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                <li><NavLink to="/category/beauty" className="dropdown-item">Beauty</NavLink></li>
                                <li><NavLink to="/category/furniture" className="dropdown-item">Furniture</NavLink></li>                                
                                <li><NavLink to="/category/fragrances" className="dropdown-item">Fragrances</NavLink></li>
                                <li><NavLink to="/category/groceries" className="dropdown-item">Groceries</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="cart" className="nav-link px-2 text-white">Cart
                                    <img src={cart} alt="cart icon" className="px-1"/>
                                </NavLink>
                            </li>
                            <li><NavLink to="help" className="nav-link px-2 text-white">Help</NavLink></li>
                            </ul>
                            <div className="d-flex align-items-center">
                                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                 <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="search" aria-label="Search" />
                                </form>

                                <div className="text-end">
                                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                                    <button type="button" className="btn btn-warning">Sign-up</button>
                                </div>
                            </div>
                        </div>
            </header>
            
                <main>
                <Outlet />
                </main>

            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-primary">ShopEasy © 2024 Company, Inc</p>
                    <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-body-secondary">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="products" className="nav-link px-2 text-body-secondary">Products</NavLink></li>
                    <li className="nav-item dropdown">
                                <a href="#"
                                className="nav-link text-body-secondary px-2 dropdown-toggle"
                                id="categoryDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                                Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                                <li><a className="dropdown-item" href="/category/beauty">Beauty</a></li>
                                <li><a className="dropdown-item" href="/category/fragrances">Fragrances</a></li>
                                <li><a className="dropdown-item" href="/category/furniture">Furniture</a></li>
                                <li><a className="dropdown-item" href="/category/groceries">Groceries</a></li>
                                </ul>
                            </li>
                    <li className="nav-item">
                        <NavLink to="cart" className="nav-link px-2 text-body-secondary">Cart
                            <img src={cart} alt="cart icon" className="px-1"/>
                        </NavLink>
                    </li>
                    <li className="nav-item"><NavLink to="help" className="nav-link px-2 text-body-secondary">Help</NavLink></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}
