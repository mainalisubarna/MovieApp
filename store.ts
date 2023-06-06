import { configureStore } from "@reduxjs/toolkit";
import movieSlicer from "./slicer/movieSlicer";
const store = configureStore({
    reducer : {
        Movies : movieSlicer
    }
})

export default store ;