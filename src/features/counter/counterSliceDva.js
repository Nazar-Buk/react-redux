import { createSlice } from "@reduxjs/toolkit";
// У редюсерах increment, decrement та incrementByAmount ми безпосередньо
// змінюємо значення state.value. Це виглядає як мутація, але завдяки Immer,
// Redux Toolkit автоматично створює новий стан на основі цих змін.

export const counterSliceDva = createSlice({
  name: "counterDva",
  initialState: {
    valueDva: 0,
  },
  reducers: {
    incrementDva: (state) => {
      state.valueDva += 1; // Мутація стану
    },
    decrementDva: (state) => {
      state.valueDva -= 1; // Мутація стану
    },
    incrementByAmountDva: (state, action) => {
      //   console.log(action, "action");
      //   console.log(state, "state");
      state.valueDva += action.payload; // Мутація стану
    },
  },
});

// Для кожного reducer ми створюємо action

export const { incrementDva, decrementDva, incrementByAmountDva } =
  counterSliceDva.actions;

export default counterSliceDva.reducer;
