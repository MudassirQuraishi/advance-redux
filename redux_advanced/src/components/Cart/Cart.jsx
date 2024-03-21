/* eslint-disable no-unused-vars */
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} id={cartItem.id} title={cartItem.name} quantity={cartItem.quantity} price={cartItem.price} />
                })}

            </ul>
        </Card>
    );
};

export default Cart;
