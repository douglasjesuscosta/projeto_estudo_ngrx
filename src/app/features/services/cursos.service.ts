import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private httpClinet: HttpClient) {}

  public getCursos(): Observable<any> {
    return this.httpClinet.get('/api/courses');
  }
}
