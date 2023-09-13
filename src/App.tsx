import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import LayoutHomepage from "./component/layoutHomepage";
import Home from "./page/HomePage/Home";

function App() {
    return (
        <>
        <RouterProvider router={router}></RouterProvider>
           
        </>
    );
}

export default App;