import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { uiActions } from './store/slices/ui_slice';

function App() {
    const isCartOpen = useSelector(state => state.ui.cartIsVisible)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const notification = useSelector((state) => state.ui.notification);
    useEffect(() => {
        const sendCart = async () => {
            try {

                dispatch(
                    uiActions.showNotification({
                        status: 'pending',
                        title: 'Sending...',
                        message: 'Sending cart data!',
                    })
                );
                const response = await fetch(
                    'https://expense-cli-default-rtdb.firebaseio.com/cart.json',
                    {
                        method: 'PUT',
                        body: JSON.stringify(cartItems),
                    }
                );
                if (response.ok) {
                    dispatch(
                        uiActions.showNotification({
                            status: 'success',
                            title: 'Success!',
                            message: 'Sent cart data successfully!',
                        })
                    );
                }
            } catch (error) {
                dispatch(
                    uiActions.showNotification({
                        status: 'error',
                        title: 'Error!',
                        message: 'Sending cart data failed!',
                    })
                );
            }

        }
        sendCart()

    }, [cartItems, dispatch])

    return <>
        {notification && <Notification
            status={notification.status} title={notification.title} message={notification.message} />}
        <Layout>
            {(isCartOpen && cartItems.length > 0) && <Cart />}
            <Products />
        </Layout>
    </>



}

export default App;
