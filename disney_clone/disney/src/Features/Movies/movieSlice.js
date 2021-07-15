import {createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movie",
    initialState : {
        movies : [],
    },
    reducers:{
        setMovie:(state,action)=>{
            state.movies = action.payload;
        }
    }
})

export const {setMovie} = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;