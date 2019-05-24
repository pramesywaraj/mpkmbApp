import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public baseUrl = "http://localhost:3000/";

  constructor() { }
}
