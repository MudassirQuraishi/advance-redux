import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Notification from './components/UI/Notification';
import { getCart, sendCart } from './store/slices/cartSlice';
let initialState = true;

function App() {
    const isCartOpen = useSelector(state => state.ui.cartIsVisible)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const notification = useSelector((state) => state.ui.notification);
    const [showNotification, setShowNotification] = useState(false);
    useEffect(() => {
        dispatch(getCart())
    }, [dispatch]);
    useEffect(() => {
        if (initialState) {
            initialState = false;
            return;
        }
        dispatch(sendCart(cartItems))
        setShowNotification(true);
        const timer = setTimeout(() => {
            setShowNotification(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [cartItems, dispatch]);


    return <>
        {showNotification && notification && <Notification
            status={notification.status} title={notification.title} message={notification.message} />}
        <Layout>
            {(isCartOpen && cartItems.length > 0) && <Cart />}
            <Products />
        </Layout>
    </>



}

export default App;
