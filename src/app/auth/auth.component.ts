import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Errors, UserService } from '../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authType: String = '';
  title: String = '';
  errors: Errors = new Errors();
  isSubmitting: boolean = false;
  authForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
              private fb: FormBuilder) {
                // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
              }

  ngOnInit() {
    this.route.url.subscribe(data => {
      console.log(data);
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign In' : 'Sign Up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
      }
    });

  }

  submitForm() {
    this.isSubmitting = true;

    let credentials = this.authForm.value;
    // check out what you get!
    console.log('submitForm: ' + JSON.stringify(credentials));
    this.userService.attemptAuth(this.authType, credentials)
    .subscribe(
      data => {
        this.router.navigateByUrl('/');
      },
      error => {
        console.log('auth.component,error =>',error);
        this.errors = error;
        this.isSubmitting = false;
      }
    )


  }

}
