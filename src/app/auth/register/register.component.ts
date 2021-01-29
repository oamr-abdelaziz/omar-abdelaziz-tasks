import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  person:Person={email:'',password:'',repeatedPassword:''};
  //how to initialize correctly??
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.register(this.person).subscribe(
      (res)=>{
        // localStorage.setItem('token',res.token);
      },
      (err)=>{console.log(err);
      },
      ()=>{}
    )
  }
}
