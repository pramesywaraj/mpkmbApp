import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl: string;

  constructor() { 
    this.baseUrl = "http://backend-mpkmb.codepanda.id/";
    this.baseUrl = "http://api.mpkmb.ipb.ac.id/";
    // this.baseUrl = "http://localhost:3000/";
    
  }
}