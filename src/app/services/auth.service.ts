import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    console.log(email + ' ' + password);
    const postData = { email, password };

    return this.http.post(`${this.apiUrl}/login`, postData);
  }
}
