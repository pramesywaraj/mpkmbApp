import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component..scss']
})
export class ArtikelComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
  }

}
