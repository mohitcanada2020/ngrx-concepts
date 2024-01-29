import { routerReducer } from "@ngrx/router-store";
import { blogReducer } from "../Blog/Blog.reducer";
import { counterReducer } from "../counter.reducer";
import { appReducer } from "./App.reducer";



export const AppState={
    counter: counterReducer,
    blog:blogReducer,
    app:appReducer,
    router: routerReducer
}