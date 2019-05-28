import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component..scss']
})
export class BeritaComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
  }

}
