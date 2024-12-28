import { createSlice } from "@reduxjs/toolkit";
// У редюсерах increment, decrement та incrementByAmount ми безпосередньо
// змінюємо значення state.value. Це виглядає як мутація, але завдяки Immer,
// Redux Toolkit автоматично створює новий стан на основі цих змін.

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Мутація стану
    },
    decrement: (state) => {
      state.value -= 1; // Мутація стану
    },
    incrementByAmount: (state, action) => {
      //   console.log(action, "action");
      //   console.log(state, "state");
      state.value += action.payload; // Мутація стану
    },
  },
});

// Для кожного reducer ми створюємо action

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
