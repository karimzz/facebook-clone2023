import { configureStore } from "@reduxjs/toolkit";
import  loginSlice  from "../Slice/loginSlice";

const store = configureStore({
    reducer : {
        loginSlice
    }
})

export default store ; 