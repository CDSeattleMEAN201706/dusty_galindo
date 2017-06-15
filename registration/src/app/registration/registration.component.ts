import { Component, OnInit } from '@angular/core';
import {User} from "./../user"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users: User[] = []
  user1: User = new User
  submitIsActive = false
  displayResult = false
  displayErrors = false
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  
  onSubmit(formData){
    if(formData.valid){
      console.log("valid form")
      console.log(this.user1)
      this.user1 = formData.form.value
      console.log(this.user1.luck)
      if (this.user1.password != this.user1.password_confirmation){
        this.displayErrors = true
        return false
      }
      // this.user1.luck = !!this.user1.luck

      this.displayResult = true

      
      return false

    }else{
      console.log(formData)
      this.displayErrors = true
      this.displayResult = false

      return false
    }
  }
}
