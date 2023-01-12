import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { REGISTER } from '../../store/auth.action';
import { IAuthState } from '../../store/auth.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;
  imageUrl!:string | any;
  file!:File;


  constructor(
    private fb:FormBuilder,
    private store:Store<IAuthState>
  ) {
    this.createRegisterForm();
  }

  ngOnInit(): void {
  }


  previewFile(event:File | any) {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(this.file);
  }else{
    return
  }
}

  createRegisterForm(){
    this.registerForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:['12345678*Ab'],
      picturePath:[''],
      location:[''],
      occupation:[''],
    })
  }

  onRegister(){
    if(this.registerForm.invalid && !this.file){
      this.registerForm.markAllAsTouched();
      return;
    }
    const {
      firstName,
      lastName,
      email,
      password,
      location,
      occupation
    } = this.registerForm.value;

    const registerPayload={
      firstName,
      lastName,
      email,
      password,
      picture:this.file?.name || '',
      location,
      occupation
    }
    this.store.dispatch(REGISTER({user:registerPayload}))

  }

}
