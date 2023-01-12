import { ActionReducerMap } from "@ngrx/store";
import { AuthReducer } from "../auth/store/auth.reducer";
import { PostReducer } from "../dashboard/store/post.reducer";

export const reducers:ActionReducerMap<any>={
  auth:AuthReducer,
  post:PostReducer
}
