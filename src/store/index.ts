import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSllice";
import productsReducer from "./produts/productSlice";
import cartSlice from "./cart/cartSlice";
import wishlistSlice from "./wishlist/wishlistSlice";
import { combineReducers } from "redux"
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/authSlice";
const cartPersistConfig = {
    key: "cart",
    storage,
    whitelist: ["items"]
}

const wishlistPersistConfig = {
    key: "wishlist",
    storage,
    whitelist: ["items"]
}

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["user", 'access_token']
}


const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authSlice),
    categories: categoriesReducer,
    products: productsReducer,
    cart: persistReducer(cartPersistConfig, cartSlice),
    wishlist: persistReducer(wishlistPersistConfig, wishlistSlice)
})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE", "persist/PAUSE", "persist/FLUSH", "persist/PURGE"],
            },
        }),
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store, persistor }
