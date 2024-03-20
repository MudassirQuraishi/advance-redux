import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: [] };

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
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
        updateItem(state, action) {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.cartItems.find((item) => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
        clearCart(state) {
            state.cartItems = [];
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
