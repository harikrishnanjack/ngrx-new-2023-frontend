import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PostService } from '../../services/post.service';
import { ADD_USER } from '../../store/post.action';
import { IPostState } from '../../store/post.state';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm !:FormGroup;
  file!:File;

  constructor(
      private fb:FormBuilder,
      private store:Store<IPostState>,

  ) { }

  ngOnInit(): void {
    this.postForm=this.fb.group({
      description:['']
    })
  }

  onFileSelect(event:any){
    this.file = event.files[0];
  }

  onPostSubmit(){
    const {description} = this.postForm.value;
    const postPayload={
      description,
      picture:this.file.name
    }
    console.log(postPayload,'postPayload');
    this.store.dispatch(ADD_USER({post:postPayload}));
  }

}
