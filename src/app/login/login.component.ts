import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnDestroy {
  email: string = '';
  password: string = '';
  private subscription: Subscription = new Subscription();
  private accessToken: any;

  constructor(private authService: AuthService) {}

  submitForm(): void {
    console.log(this.email + ' ' +  this.password);
    this.authService.login(this.email, this.password)
    .subscribe({
      next: (response: any) => {
        this.accessToken = response;
        console.log('In next this.accessToken:', this.accessToken);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
