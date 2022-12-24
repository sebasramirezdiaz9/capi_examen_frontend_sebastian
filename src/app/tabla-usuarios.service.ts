import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TablaUsuariosService {

  constructor(private http: HttpClient) {}

  users: any

  getUsers(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/users/list');
  }
}
