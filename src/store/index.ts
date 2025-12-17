import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSllice";
import productsReducer from "./produts/productSlice";
import cartSlice from "./cart/cartSlice";
import wishlistSlice from "./wishlist/wishlistSlice";
import { combineReducers } from "redux"
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "cart",
    storage,
    whitelist: ["items"]
}

const wishlistPersistConfig = {
    key: "wishlist",
    storage,
    whitelist: ["items"]
}

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: persistReducer(persistConfig, cartSlice),
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
