import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl: string;

  constructor() { 
    // this.baseUrl = "http://backend-mpkmb.codepanda.id/";
    this.baseUrl = "http://172.18.16.52:3056/";
    
  }
}