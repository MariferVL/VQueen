import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
  ) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>('/api/menu');
  }

  getMenusById(id: string): Observable<Menu> {
    return this.http.get<Menu>(`/api/menu/${id}`)
  }

  addSaleToMenu(id: string): Observable<Menu> {
    return this.http.post<Menu>(
      `/api/menu/${id}/sale`,
      {},
      httpOptions
      );
  }


}