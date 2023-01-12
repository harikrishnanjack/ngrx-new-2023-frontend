import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt from 'jwt-decode';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Post } from '../interceptors/post.interceptor';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUri='http://localhost:3001/posts';

  constructor(
    private http:HttpClient,
    private storage:StorageService
  ) { }

  private getToken(){
    return this.storage.getToken();
  }

  getPosts():Observable<any>{
    const userData:any=jwt(this.getToken());
    const currentUserId=userData?.id;
    return this.http.get(this.postUri + `/${currentUserId}` + '/posts');
  }

  postNewData(payload:any):Observable<Post>{
    const formData = new FormData();
    const userData:any=jwt(this.getToken());
    const currentUserId=userData?.id;
    formData.append('picture', payload.picture);
    formData.append('description', payload.description);
    formData.append('userId',currentUserId)
    return this.http.post<Post>(this.postUri,formData);
  }
}
