import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PenugasanService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getCategories(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'category/get?isPopulate=true')
      .pipe(
        map(resp => {
          return resp;
        }),  
        // retry(3),
      );
  }  

  public getImage(id): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'task/image/' + id)
      .pipe(
        map(resp => {
          return resp;
        }),
        // retry(3),

      );
  }  

}
