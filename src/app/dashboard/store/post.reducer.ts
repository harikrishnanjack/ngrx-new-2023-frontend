import { Action, createReducer, on, State } from "@ngrx/store";
import { ADD_USER_STATUS, GET_STATUS } from "./post.action";
import { initialState } from "./post.state";

const postReducer = createReducer(
  initialState,
  on(GET_STATUS,(state,{response,status,error})=>({
    postData:{
      response,
      status,
      error
    }
  })),
  on(ADD_USER_STATUS,(state,{response,status,error})=>({
    postData:{
      response,
      status,
      error
    }
  })),
);

export function PostReducer(state: unknown | any | undefined, action: Action) {
  return postReducer(state, action);
}
