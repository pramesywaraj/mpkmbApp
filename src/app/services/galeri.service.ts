import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GaleriService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getAllGaleriesImages(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'galery/image/list?status=true')
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }  

  public getAllCategories(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'galery/category/get?isPopulate=true')
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }  

  public getAllVideos(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'galery/video/list?status=true')
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }  

}
