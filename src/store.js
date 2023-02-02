import { configureStore } from '@reduxjs/toolkit';

// slices
import productReducer from './slices/productSlice';
import authReducer from './slices/authSlice';
// import userReducer from './slices/userSlice';
import articleReducer from './slices/articleSlice'

// Persist Configuration
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfigAuth = {
    key: 'auth',
    storage
  };
const persistConfigProduk = {
    key: 'product',
    storage
  };
// const persistConfigArticle = {
//     key: 'article',
//     storage
//   };

const persistedAuth = persistReducer(persistConfigAuth, authReducer);
const persistedProduk = persistReducer(persistConfigProduk, productReducer);
// const persistedArticle = persistReducer(persistConfigArticle, articleReducer);
// const persistedUser = persistReducer(persistConfigUser, userReducer);

const reducer = {
    auth: persistedAuth,
    product: persistedProduk,
    // user: persistedUser,
    article: articleReducer,
}
export const store = configureStore({
    reducer: reducer,
    devTools: true
  });

export const persistor = persistStore(store);