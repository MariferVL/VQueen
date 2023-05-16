import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0';

  constructor(private http: HttpClient) { }

  getProducts(page: number, limit: number): Observable<any> {
    const url = `${this.apiUrl}/products`;
    const params = { _page: page.toString(), _limit: limit.toString() };

    return this.http.get(url, { params });
  }
}
