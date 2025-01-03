/// ЗРОБИВ STORE ДЛЯ РЕДАКСУ
///
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "../features/counter/counterSlice";
import counterDvaReducer from "../features/counter/counterSliceDva";
import createFilter from "redux-persist-transform-filter";
// npm i redux-persist-transform-filter

const rootReducer = combineReducers({
  counter: counterReducer,
  counterDva: counterDvaReducer,
});

const saveOnlyFilter = createFilter("counterDva", ["valueDva"]); // пишу name редюсера і масив з ключами які я хочу зберігати, valueDva -- це ключ в стейті

const persistConfig = {
  key: "root", // цe назва ключа в localStorage
  storage,
  version: 1,
  whitelist: ["counterDva"], //(це name у слайсі) тут ми вказуємо які редюсери ми хочемо зберігати, бо інакше буде зберігати все
  transforms: [saveOnlyFilter],
};

const persistedState = persistReducer(persistConfig, rootReducer);

// export default configureStore({
//     reducer: {
//       counter: counterReducer,
//     },
//   });

export const store = configureStore({
  reducer: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);
