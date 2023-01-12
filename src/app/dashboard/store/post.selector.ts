import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "../interceptors/post.interceptor";
import { IPostState } from "./post.state";



const getPostsState = createFeatureSelector<IPostState>('post');


export const getPostData = () =>
  createSelector(getPostsState, (state: any) => state.postData);

export const getPostDataId = (id:any) =>
  createSelector(getPostsState, (state: any) => state.posts.find((posts:Post)=>posts.userId === id));

