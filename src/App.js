import { Route, createBrowserRouter, 
  createRoutesFromElements, RouterProvider,
} from "react-router-dom";


//Pages
import Home from "./pages/Home";
import Category from "./pages/Category"
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Signup from "./login/signup";
import Login from "./login/login";


//Layout
import RootLayout from "./layout/RootLayout";
import ProductLayout from "./layout/ProductLayout";
import CategoryLayout from "./layout/CategoryLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products">
        <Route index element={<ProductLayout />} />
        <Route path=":id" element={<ProductDetails />}/>
      </Route>
      <Route path="category" element={<CategoryLayout />}>
        <Route path=":CategoryName" element={<Category />} />
      </Route>
      <Route path="cart" element={<Cart/>} />
      <Route path="signup" element={< Signup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="*" element={<ErrorPage />} />
    </Route> 
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App;
