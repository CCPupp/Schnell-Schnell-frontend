import { Component, OnInit } from '@angular/core';

interface Login {
  username: string;
  password: string;
  token: string;
}

interface Response {
  Success: boolean;
}

@Component({
  selector: 'login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  alertText = ''

  async loginFunc(email: string, password: string, token: string) {
    const response = await fetch('http://localhost:12345/login', {
      method: 'POST',
      body: JSON.stringify({
        "Username": email,
        "Password": password,
        "Token": token
      }),
    });
    const body = await response.json();
    if (body.Success == true) {
      window.location.href = 'http://onecause.com'
    } else {
      this.alertText = "Invalid Password / Token"
    }
  }
}
