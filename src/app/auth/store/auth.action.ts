import { createAction, props } from "@ngrx/store";
import { Login, Register } from "../interface/auth.interface";

const REGISTER_START="[Auth] Register User";
const REGISTER_STAT="[Auth] Register Status";

const LOGIN_START="[Auth] Login User";
const LOGIN_STAT="[Auth] Login Status";

const AUTO_IN="[Auth] Auto Login User";
const AUTO_OUT="[Auth] Auto Logout User";



export const REGISTER = createAction(REGISTER_START, props<{user: Register}>());
export const REGISTER_STATUS = createAction(REGISTER_STAT, props<{response?:any,status:boolean,error?:any}>());

export const LOGIN = createAction(LOGIN_START, props<{user: Login}>());
export const LOGIN_STATUS = createAction(LOGIN_STAT, props<{response?:any,status:boolean,error?:any}>());

export const  AUTO_LOGIN = createAction(AUTO_IN);
export const  AUTO_LOGOUT = createAction(AUTO_OUT);

