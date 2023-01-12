export interface Login{
  email:string | null;
  password:string | null;
  token?:string | null;
}

export interface Register extends Login{
  firstName:string | null;
  lastName:string | null;
  picture:string | null;
  location:string | null;
  occupation:string | null;
}
