/* eslint-disable react/prop-types */
import { cartActions } from '../../store/slices/cartSlice';
import classes from './CartItem.module.css';
import { useDispatch } from "react-redux";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const increaseCart = () => {
        dispatch(cartActions.addItem(props))
    }
    const decreaseCart = () => {
        dispatch(cartActions.reduceItem(props.id))
    }
    const { title, quantity, price } = props;

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${quantity * price.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decreaseCart}>-</button>
                    <button onClick={increaseCart} >+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
