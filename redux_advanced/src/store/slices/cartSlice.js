import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui_slice";

const initialCartState = { cartItems: [] };

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.cartItems = action.payload;
        },
        addItem(state, action) {
            const existingCartItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                const newItem = {
                    id: action.payload.id,
                    name: action.payload.title,
                    price: action.payload.price,
                    quantity: state.quantity + 1 || 1,
                };
                state.cartItems.push(newItem);
            }
        },
        reduceItem(state, action) {
            const id = action.payload;
            state.cartItems = state.cartItems
                .map((item) => {
                    if (item.id === id) {
                        item.quantity -= 1;
                        if (item.quantity <= 0) {
                            return null;
                        }
                    }
                    return item;
                })
                .filter(Boolean);
        },
        clearCart(state) {
            state.cartItems = [];
        },
    },
});

export const sendCart = (cart) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            // dispatch(
            //     uiActions.showNotification({
            //         status: "pending",
            //         title: "Sending...",
            //         message: "Sending cart data!",
            //     })
            // );
            const response = await fetch(
                "https://expense-cli-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );
            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }
        };
        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    };
};
export const getCart = () => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Fetching cart data!",
            })
        );
        const getRequest = async () => {
            const response = await fetch(
                "https://expense-cli-default-rtdb.firebaseio.com/cart.json"
            );
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        };
        try {
            const cartItems = await getRequest();
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Cart data fetched successfully!",
                })
            );
            dispatch(cartActions.replaceCart(cartItems));
        } catch (error) {
            console.log(error);
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data failed!",
                })
            );
        }
    };
};
export const cartActions = cartSlice.actions;
export default cartSlice;
