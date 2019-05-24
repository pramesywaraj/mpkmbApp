import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-penugasan',
  templateUrl: './penugasan.component.html',
  styleUrls: ['./penugasan.component..scss']
})
export class PenugasanComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
  }

}
