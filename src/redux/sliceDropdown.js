import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    activeDropdownID: null,
}

const sliceDropdown = createSlice({
    name:'dropdown',
    initialState,
    reducers:{
        setActiveDropdown: (state, action) => {
            state.activeDropdownID = action.payload;
        },
        cleanActiveDropdown: (state) => {
            state.activeDropdownID= null
        }
    }
})

export const {setActiveDropdown, cleanActiveDropdown} = sliceDropdown.actions;
export default sliceDropdown.reducer