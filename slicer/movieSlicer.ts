import { createSlice } from '@reduxjs/toolkit'

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}
export interface MovieInterface {
    moviesData: Array<Movie>;
}


const initialState : MovieInterface = {
    moviesData: []
}

const movieSlice = createSlice({
    name : 'Movie',
    initialState,
    reducers : {
        setMovies : (state, action) =>{
            state.moviesData = action.payload
        }
    }
})

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;