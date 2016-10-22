import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log('onSubmit');
    console.log(this.username);
    /*this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });*/
    this.userService.login(this.username, this.password).subscribe(
      data => {
        if (data===true) {
          this.router.navigate(['']);
        }
      },
      err => console.log("Can't get page. Error code: %s, URL: %s ",
                err.status, err.url),
      () => console.log("Done")
    );
  }

}
