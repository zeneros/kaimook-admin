import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {

  login2() {
    if (this.user.username == "admin" && this.user.password == "1234") {
      // console.log("success login", this);  
      this.showMessages.success = true;
      this.showMessages.error = false;
      this.messages.push("success login");
    } else {
      // console.log("fail login", this);
      this.showMessages.success = false;
      this.showMessages.error = true;
      this.errors.push("fail login");
    }
  }
}