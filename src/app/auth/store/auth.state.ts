export interface IAuthState{
  loginUser?:{
    response:any;
    status:boolean;
    error?: string;
  },
  registerUser?:{
    response:any;
    status:boolean;
    error?: string;
  }
}

export const initialState:IAuthState={
  loginUser:undefined,
  registerUser:undefined
}
