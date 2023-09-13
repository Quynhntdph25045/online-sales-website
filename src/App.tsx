import "./App.css";
import Cart from "./components/cart";
import Counter from "./components/couter";
// import Counter from "./components/couter";
import ProductList from "./components/productlist";
function App() {
    return (
        <>
            <div className="w-96 mx-auto border border-gray-500 p-2">
                <hr />
                <Counter />
                <hr />
                {/* <ProductList /> */}
                <hr />
                {/* <Cart /> */}
            </div>
        </>
    );
}

export default App;