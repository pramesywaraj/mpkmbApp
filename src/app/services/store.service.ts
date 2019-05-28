import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getStoreItem(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'store/gets?page=1&limit=100')
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }  

  public getStoreImage(url): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'store/image/' + url)
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }  

  public postOrderItem(data): Observable<any> {
    return this.http.post<any>(
      this.configService.baseUrl + 'order/create', JSON.stringify(data), this.httpOptions)
      .pipe(
        map(resp => {
          if(resp.status == 200) {
            alert("Pemesanan Berhasil Direkam, Terimakasih")
            return resp;
          }
          
          return resp;
        })
      );
  }

}
