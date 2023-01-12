import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GET } from '../../store/post.action';
import { getPostData } from '../../store/post.selector';
import { IPostState } from '../../store/post.state';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  userData:any;

  constructor(
    private store:Store<IPostState>,
    private router:Router
  ) {
    this.store.dispatch(GET());
   }

  ngOnInit(): void {
    this.store.select(getPostData()).subscribe((data)=>{
      this.userData = data?.response;
    })
  }

  naviagteToPostForm(){
    this.router.navigateByUrl('/dashboard');
  }

}
