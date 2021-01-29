import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  person:Person={email:'',password:'',repeatedPassword:''};

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.person).subscribe(
      (res)=>{localStorage.setItem('token',res['token']);
      
      },
      (err)=>{console.log(err);
      },
      ()=>{}
    )
  }
}
