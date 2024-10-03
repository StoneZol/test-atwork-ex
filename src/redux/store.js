import { configureStore } from "@reduxjs/toolkit";
import sliceUsers from "./sliceUsers";
import sliceDropdown from "./sliceDropdown";
import userEditSlice from "./userEditSlice";


const store = configureStore({
    reducer:{
        users: sliceUsers,
        dropdown: sliceDropdown,
        userEdit: userEditSlice,
    }
})

export default store;