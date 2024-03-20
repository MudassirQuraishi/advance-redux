/* eslint-disable no-unused-vars */
import { uiActions } from '../../store/slices/ui_slice';
import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
    const dispatch = useDispatch()
    const toggleHandler = () => {
        dispatch(uiActions.toggle())
    }
    return (
        <button className={classes.button} onClick={toggleHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
