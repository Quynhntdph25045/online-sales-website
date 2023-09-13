import { Navigate, createBrowserRouter } from "react-router-dom";
import LayoutHomepage from "./component/layoutHomepage";
import Home from "./page/HomePage/Home";
import Adminproduct from "./page/admin";
import LayoutAdmin from "./component/LayoutAdmin";
import EditProduct from "./page/admin/EditProduct";
import AdminAddProduct from "./page/admin/AdminAddProduct";
import About from "./page/ProductDetail/ProductDetail";
import Signin from "./page/auth/signin";
import Signup from "./page/auth/signup";
import MyOrder from "./page/MyOder/MyOrder";

export const router = createBrowserRouter([
    {path:"/signin",element:<Signin/>},
    {path:"/signup",element:<Signup/>},
    { path: "/", element: <LayoutHomepage /> ,children:[
        {path:"/",element:<Home/>},
        {path:"/detail/:id",element:<About/>},
        {path:"/cart",element:<MyOrder/>}
    ]},

    { path: "/admin",
    element: <LayoutAdmin />,
    children: [
        { index: true, element: <Navigate to="products" /> },
        {path:"/admin/products", element:<Adminproduct/>},
        {path:"/admin/products/add", element:<AdminAddProduct/>},
        {path:"/admin/products/:idProduct", element:<EditProduct/>},

    ]
}
]);