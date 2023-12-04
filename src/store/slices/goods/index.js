import { createSlice} from '@reduxjs/toolkit';

//Устанавливаем название слайса
const name = 'goods';

//Создадим обЪект слайса
export const slice = createSlice(
    {
        //Устанавливаем название слайса
        name: 'goods',
        //Состояние слайса по умолчанию
        initialState: {
            
            test: 'x',
            list: [],
            item: null,
            basket: [],
            
        },
        reducers: {
           
        },
        extraReducers: (builder) => {
            builder.addCase('TEST', (state, action) =>{
                console.log('Сработал экстра редьюсер test', state, action)
                //Заполним стейт
                state.test = action.payload
            })

        }
    }
)


