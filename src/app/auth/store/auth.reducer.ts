import { Action, createReducer, on, State } from "@ngrx/store";
import { AUTO_LOGOUT, LOGIN_STATUS, REGISTER_STATUS } from "./auth.action";
import { initialState } from "./auth.state";

const authReducer = createReducer(
  initialState,
  on(REGISTER_STATUS,(state,{response,status,error})=>({
    ...state,
    registerUser:{
      response,
      status,
      error
    }
  })),
  on(LOGIN_STATUS,(state,{response,status,error})=>({
    ...state,
    loginUser:{
      response,
      status,
      error
    }
  })),
  on(AUTO_LOGOUT,(state)=>({
    ...state,
    loginUser:undefined
  }))
);

export function AuthReducer(state: unknown | any | undefined, action: Action) {
  return authReducer(state, action);
}
