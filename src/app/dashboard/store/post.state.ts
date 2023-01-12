export interface IPostState{
  postData?:{
    response:any;
    status:boolean;
    error?: string;
  },
}

export const initialState:IPostState={
  postData:undefined
}
