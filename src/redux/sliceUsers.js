import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getUsersAPI } from "../Modules/API";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch(getUsersAPI)
        const data = await response.json();
        return data.slice(0,6)
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        value: [],
        arhiv: [],
        status: 'idle',
        error: null
    },
    reducers: {
        userAdd(state, action) {
            const user = state
                .arhiv
                .find(user => user.id === action.payload);
            state
                .value
                .push(user);
            state.arhiv = state
                .arhiv
                .filter(user => user.id !== action.payload);
        },
        userDelete(state, action) {
            state.value = state
                .value
                .filter(user => user.id !== action.payload);
        },
        userArhivated(state, action) {
            const user = state
                .value
                .find(user => user.id === action.payload);
            state
                .arhiv
                .push(user);
            state.value = state
                .value
                .filter(user => user.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.value = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const {userAdd, userDelete, userArhivated} = usersSlice.actions;
export default usersSlice.reducer;