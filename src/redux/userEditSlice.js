import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    originalUser: {
        name: '',
        username: '',
        email: '',
        address: {
            city: ''
        },
        phone: '',
        company: {
            name: ''
        }
    },
    editedUser: {
        name: '',
        username: '',
        email: '',
        address: {
            city: ''
        },
        phone: '',
        company: {
            name: ''
        }
    }
};


const userEditSlice = createSlice({
    name: 'userEdit',
    initialState,
    reducers: {
        setOriginalUser: (state, action) => {
            state.originalUser = {
                ...action.payload,
                address: action.payload.address,
                company: action.payload.company 
            };
            state.editedUser = { ...state.originalUser };
        },
        updateUserField(state, action) {
            const { field, value } = action.payload;
            const keys = field.split('.'); // Разбиваем строку по точкам
            let obj = state.editedUser;
        
            keys.forEach((key, index) => {
                if (index === keys.length - 1) {
                    obj[key] = value; // Обновляем значение последнего ключа
                } else {
                    // Если объект не существует, создаем его
                    if (!obj[key]) {
                        obj[key] = {}; // Создаем вложенный объект, если его нет
                    }
                    obj = obj[key]; // Переход к вложенному объекту
                }
            });
        },
        
        resetUserEdit(state) {
            state.editedUser = {...state.originalUser};
        },
    },
});

export const { setOriginalUser, updateUserField, resetUserEdit } = userEditSlice.actions;
export default userEditSlice.reducer;
