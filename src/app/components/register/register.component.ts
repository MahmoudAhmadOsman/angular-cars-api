import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerTitle = "Register"
  constructor() { }

  ngOnInit(): void {
  }


  userRegister() {
    alert("Working on it")
  }

}
