import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-body-store',
  templateUrl: './body-store.component.html',
  styleUrls: ['./body-store.component..scss']
})
export class BodyStoreComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
    let url = this.configService.baseUrl
    console.log("Cek : ", url);
  }

}
