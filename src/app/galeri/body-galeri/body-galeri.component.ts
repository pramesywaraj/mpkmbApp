import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-body-galeri',
  templateUrl: './body-galeri.component.html',
  styleUrls: ['./body-galeri.component..scss']
})
export class BodyGaleriComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
    let url = this.configService.baseUrl
    console.log("Cek : ", url);
  }

}
