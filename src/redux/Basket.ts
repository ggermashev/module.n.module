import {createSlice} from "@reduxjs/toolkit";
import {BasketItem} from "../types/types";


const Basket = createSlice({
    name: "basket",
    initialState: {
        id: 0,
        products: [] as BasketItem[],
        countNewProducts: 0,
        countNewOrders: 0,
    },
    reducers: {
        addProduct(state, action) {
            if (state.products.find(product => product.product.id === action.payload.id)) {
                return
            }
            state.products.push({product: {...action.payload}, count: 1})
            state.countNewProducts++
        },
        removeProduct(state, action) {
            state.products = state.products.filter(product => product.product.id !== action.payload)
        },
        clearProducts(state) {
          state.products = []
        },
        increaseCount(state, action) {
            state.products[action.payload].count++
        },
        decreaseCount(state, action) {
            if (state.products[action.payload].count > 1) {
                state.products[action.payload].count--
            }
        },
        clearNewProducts(state) {
            state.countNewProducts = 0
        },
        clearNewOrders(state) {
            state.countNewOrders = 0
        },
        addNewOrder(state) {
          state.countNewOrders++
        }

    }
})

export default Basket.reducer
export const {
    addProduct,
    removeProduct,
    clearProducts,
    increaseCount,
    decreaseCount,
    clearNewProducts,
    clearNewOrders,
    addNewOrder
} = Basket.actions