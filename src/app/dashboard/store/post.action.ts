import { createAction, props } from "@ngrx/store";
import { Post } from "../interceptors/post.interceptor";

const USER_GET_START="[Dashboard] Get User";
const USER_GET_STAT="[Dashboard] Get User Status";

const USER_ADD_START="[Dashboard] Add User";
const USER_ADD_STAT="[Dashboard] Add User Status";

export const GET = createAction(USER_GET_START);
export const GET_STATUS = createAction(USER_GET_STAT, props<{response?:any,status:boolean,error?:any}>());

export const ADD_USER = createAction(USER_ADD_START, props<{post: Post}>());
export const ADD_USER_STATUS = createAction(USER_ADD_STAT, props<{response?:any,status:boolean,error?:any}>());




