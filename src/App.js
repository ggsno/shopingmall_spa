import Cart from "./page/Cart.js";
import ProductDetail from "./page/ProductDetail.js";
import ProductList from "./page/ProductList.js";
import { fetchProduct } from "./api.js";

export default function App({ $target }) {
    this.state = {
        pathname: location.pathname,
        selected: null,
    }
    this.setState = (nextState) => {
        this.state = { ...this.state, ...nextState};
        this.renderpage(this.state.pathname);
    }

    this.renderpage = async(pathname) => {
        try {
            $target.innerHTML = "";
            if (pathname === "/web/") {
                new ProductList({
                    $target, 
                    initialState: {
                        items: await fetchProduct()
                    },
                    onClick: async (id) => {
                        this.setState({ pathname: `/web/products/${id}` });
                    }
                }).render();
            } else if (/^\/web\/products\//.test(pathname)) {
                new ProductDetail({
                    $target,
                    initialState: {
                        ...await fetchProduct(pathname.slice("/web/products/".length)),
                        totalPrice: 0
                    },
                    onChange: () => {
                    }
                }).render();
            } else if (pathname === "/web/cart") {
                new Cart({ $target, items: []}).render();
            } else {
                throw new Error("error: bad url");
            }
        } catch (e) {
            alert(e.message);
        }
    }

    this.renderpage(location.pathname);
}