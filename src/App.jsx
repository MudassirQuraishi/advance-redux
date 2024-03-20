import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products'
import { useSelector } from 'react-redux';

function App() {
    const isCartOpen = useSelector(state => state.ui.cartIsVisible)
    console.log(isCartOpen)
    return <>
        <Layout>
            {isCartOpen && <Cart />}
            <Products />
        </Layout>
    </>



}

export default App;
