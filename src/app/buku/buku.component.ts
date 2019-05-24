import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component..scss']
})
export class BukuComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
  }

}
