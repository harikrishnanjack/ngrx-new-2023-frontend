import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from "primeng/api";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { StorageService } from "src/app/shared/services/storage.service";
import { AuthService } from "../services/auth.service";
import { AUTO_LOGIN, AUTO_LOGOUT, LOGIN, LOGIN_STATUS, REGISTER,REGISTER_STATUS } from "./auth.action";

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router:Router,
    private messageService: MessageService,
    private storage:StorageService
    ) {}

  registerUser$= createEffect(():any => {
    return this.actions$.pipe(
      ofType(REGISTER),
      mergeMap(({user}):any=>{
        return this.authService.register(user).pipe(
          map((data)=>{
            if(data)
            this.router.navigate(['/login']);
            this.messageService.add({severity:'success', summary:'New User Added'});
            return REGISTER_STATUS({response:data,status:true})
          }),
          catchError((error:any):any=>{
            return of(REGISTER_STATUS({status:false,error:error?.error?.error || error.error.msg}))
          })
        )
      })
    )
  });

  loginUser$= createEffect(():any => {
    return this.actions$.pipe(
      ofType(LOGIN),
      mergeMap(({user}):any=>{
        return this.authService.logIn(user).pipe(
          tap((data)=>{
            if(data && data.token)
            this.storage.setAccessToken(data?.token);
          }),
          map((data)=>{
            if(data)
            this.router.navigate(['/dashboard']);
            this.messageService.add({severity:'success', summary:'Login Success'});
            return LOGIN_STATUS({response:data,status:true});
          }),
          catchError((error:any):any=>{
            return of(LOGIN_STATUS({status:false,error:error?.error?.error || error.error.msg}))
          })
        )
      })
    )
  });

  Logout$=createEffect(():any=>{
    return this.actions$.pipe(
      ofType(AUTO_LOGOUT),
      map((action):any=>{
        this.authService.logout();
        this.router.navigate(['/login']);
      })
    )
  },{dispatch:false});


}
