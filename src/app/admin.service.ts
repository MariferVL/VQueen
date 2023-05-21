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

  getOrdersForEmployees(): Observable<Menu[]> {
    return this.http.get<Menu[]> ('/api/employees/12345/orders')
  }

  deleteMenu(id: string): Observable<any> {
    return this.http.delete(`/api/menu/${id}`)
  }

  createMenu(name: string, description: string,ingredients: string,allergens: string,price: number): Observable<Menu> {
    return this.http.post<Menu>(
      '/api/menu',
      {name, description,ingredients,allergens,price},
      httpOptions,
    );
  }

}
