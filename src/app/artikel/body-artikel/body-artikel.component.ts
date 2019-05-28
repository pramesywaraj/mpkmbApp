import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import { BeritaService } from 'src/app/services/berita.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-body-artikel',
  templateUrl: './body-artikel.component.html',
  styleUrls: ['./body-artikel.component..scss']
})
export class BodyArtikelComponent implements OnInit {

  newsDetail = [];
  id: any;
  dataLocal : any;
  backgroundImageStyle = [];
  photo : any = "http://172.18.16.52:3056/news/image/5ced372dab67f67e86047f78%20Cover.jpg"

  constructor(private httpClient: HttpClient, private configService: ConfigService, public berita: BeritaService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dataLocal = JSON.parse(localStorage.getItem('newsDetail'));
    console.log("Cek Data Local : ", this.dataLocal);

    this.getNewsDetail(this.dataLocal._id);

  }

  formatURL(data){
    return data.split(' ').join('%20');
  }

  formatImageSrc(data){
    // console.log("final", this.configService.baseUrl + "store/image/" + this.formatURL(data))
    return this.configService.baseUrl + "news/image/" + this.formatURL(data);
  }

  getNewsDetail(id) {
    this.berita.getNewsDetail(id).subscribe(data => {
      this.newsDetail = data.news;
      console.log("Cek Detail Berita : ", this.newsDetail);
    });
  }  

  imageUrl(data) {
    let link =  this.formatImageSrc(data);
    console.log("Cek Link : ", link);
    return link
    // return this.sanitizer.bypassSecurityTrustStyle('url(' + link + ')');
  }  

}
