import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private loginForm: FormGroup;
  private submitted = false;
  private error = ''
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    alert('ok');
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert('ok');
        return;
    }
    console.log('this.loginForm.value', this.f.username.value)
    this.authenticationService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
        data => {
          console.log('data', data);
          this.router.navigate(['/role']);
          // if(data.role === 'Admin') {
          //   this.router.navigate(['/admin']);
          // }else {
          //   this.router.navigate(['/user']);
          // }   
        },
        error => {
            this.error = error;
            alert(this.error)
            console.log('this.error', this.error);
        });

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}

}
