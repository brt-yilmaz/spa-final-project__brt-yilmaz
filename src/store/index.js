import { createSlice, configureStore } from "@reduxjs/toolkit";

/************************  Login  *******************************/

const initialLoginState = { isLogin: false };

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    changeLogin(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

export const loginActions = loginSlice.actions;

/************************  Query  *******************************/

const initialQueryState = { query: "" };

const querySlice = createSlice({
  name: "query",
  initialState: initialQueryState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const queryActions = querySlice.actions;

/************************  Movies  *******************************/

const initialMoviesState = { searchedMovies: [], watchedMovies: [] };

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    setSearchedMovies(state, action) {
      state.searchedMovies = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;

/************************ Configure Store  *******************************/

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    query: querySlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export default store;
