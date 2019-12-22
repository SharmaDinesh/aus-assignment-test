import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public submitted = false;
  private error = ''
  public accessRole: any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.accessRole = this.activatedRoute.snapshot.paramMap.get('accessRole');
    console.log('accessRole', this.accessRole)
    if(this.accessRole === 'business') {
      this.signupForm = this.formBuilder.group({
        businessname: ['', Validators.required],
        address: ['', Validators.required],
        contactnumber: ['', Validators.required],
        businesstype: ['', Validators.required],
        description: ['', Validators.required],
        websiteurl: ['', Validators.required],
      });
    } else {
      this.signupForm = this.formBuilder.group({
        customername: ['', Validators.required],
        customeremail: ['', Validators.required],
      });
    }

  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }
    console.log('this.loginForm.value', this.f.username.value) 
  }


}
