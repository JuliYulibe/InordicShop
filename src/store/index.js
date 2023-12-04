import { configureStore } from "@reduxjs/toolkit";

import { slice } from "./slices/goods";

//Корнфигурация глобального хранилища
export const store = configureStore({
    reducer: {
        goods: slice.reducer

    },

})
