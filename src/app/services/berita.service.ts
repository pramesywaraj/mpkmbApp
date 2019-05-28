import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeritaService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getAllNews(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'news/gets?page=1&limit=1000&select=title summary imageCover&sort=-1')
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }  

  public getNewsDetail(id:number): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'news/get/' + id
    ).pipe(
      map(
        resp => {
          return resp;
        }
      ),
    ); 
  }
}
