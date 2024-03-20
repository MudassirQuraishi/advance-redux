import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products'
import { useSelector } from 'react-redux';

function App() {
    const isCartOpen = useSelector(state => state.ui.cartIsVisible)
    const cartItems = useSelector(state => state.cart.cartItems)
    return <>
        <Layout>
            {(isCartOpen && cartItems.length > 0) && <Cart />}
            <Products />
        </Layout>
    </>



}

export default App;
