import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-body-penugasan',
  templateUrl: './body-penugasan.component.html',
  styleUrls: ['./body-penugasan.component..scss']
})
export class BodyPenugasanComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
    let url = this.configService.baseUrl
    console.log("Cek : ", url);
  }

}
