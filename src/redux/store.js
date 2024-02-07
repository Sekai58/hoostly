import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pageSlice from "./features/pageSlice";
import hamburgerSlice from "./features/hamburgerSlice";
// import hamburgerSlice from "./features/hamburgerSlice";
// import { apiSlice } from "./features/apiSlice";
// import userSlice from "./features/userSlice";
// import multiStepFormSlice from "./features/multiStepFormSlice";

const rootReducer = combineReducers({
  //   [apiSlice.reducerPath]: apiSlice.reducer,
  page: pageSlice,
  hamburger: hamburgerSlice,
  //   form: multiStepFormSlice,
  //   user: userSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "page"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);
