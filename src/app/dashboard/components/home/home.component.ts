import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AUTO_LOGOUT } from 'src/app/auth/store/auth.action';
import { IAuthState } from 'src/app/auth/store/auth.state';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store<IAuthState>,
    private route:Router
  ) { }

  ngOnInit(): void {

  }

  onLogout(){
    this.store.dispatch(AUTO_LOGOUT());
  }

  navigateToList(){
    this.route.navigateByUrl('/dashboard/post-list')
  }

}
