import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from "primeng/api";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { StorageService } from "src/app/shared/services/storage.service";
import { PostService } from "../services/post.service";
import { ADD_USER, ADD_USER_STATUS, GET, GET_STATUS } from "./post.action";

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private router:Router,
    private messageService: MessageService,
    private storage:StorageService,
    private postService:PostService
    ) {}

  getUser$=createEffect(():any=>{
    return this.actions$.pipe(
      ofType(GET),
      mergeMap(():any=>{
        return this.postService.getPosts().pipe(
          map((data)=>{
            return GET_STATUS({response:data,status:true});
          }),
          catchError((error:any):any=>{
            return of(GET_STATUS({status:false,error:error?.error?.error || error.error.msg}));
          })
        )
      })
    )
  });

  addUser$=createEffect(():any=>{
    return this.actions$.pipe(
      ofType(ADD_USER),
      mergeMap(({post}):any=>{
        return this.postService.postNewData(post).pipe(
          map((data)=>{
            this.router.navigate(['/dashboard/post-list']);
            return ADD_USER_STATUS({response:data,status:true});
          }),
          catchError((error:any):any=>{
            return of(ADD_USER_STATUS({status:false,error:error?.error?.error || error.error.msg}));
          })
        )
      })
    )
  });


}
