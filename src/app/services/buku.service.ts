import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BukuService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
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
