/* eslint-disable no-unused-vars */
import { uiActions } from '../../store/slices/ui_slice';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const toggleHandler = () => {
        dispatch(uiActions.toggle())
    }
    return (
        <button className={classes.button} onClick={toggleHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartItems.length}</span>
        </button>
    );
};

export default CartButton;
