import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-body-artikel',
  templateUrl: './body-artikel.component.html',
  styleUrls: ['./body-artikel.component..scss']
})
export class BodyArtikelComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
    let url = this.configService.baseUrl
    console.log("Cek : ", url);
  }

}
