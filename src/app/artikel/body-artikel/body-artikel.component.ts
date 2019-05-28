import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import { BeritaService } from 'src/app/services/berita.service';

@Component({
  selector: 'app-body-artikel',
  templateUrl: './body-artikel.component.html',
  styleUrls: ['./body-artikel.component..scss']
})
export class BodyArtikelComponent implements OnInit {

  newsDetail = [];
  id: any;
  dataLocal : any;

  constructor(private httpClient: HttpClient, private configService: ConfigService, public berita: BeritaService) { }

  ngOnInit() {
    this.dataLocal = JSON.parse(localStorage.getItem('newsDetail'));
    console.log("Cek Data Local : ", this.dataLocal);

    this.getNewsDetail(this.dataLocal._id);

  }

  getNewsDetail(id) {
    this.berita.getNewsDetail(id).subscribe(data => {
      this.newsDetail = data.news;
      console.log("Cek Detail Berita : ", this.newsDetail);
    });
  }  


}
