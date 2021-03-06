import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { BeritaService } from 'src/app/services/berita.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-body-berita',
  templateUrl: './body-berita.component.html',
  styleUrls: ['./body-berita.component..scss']
})
export class BodyBeritaComponent implements OnInit {

  newsDetail: any;
  timelines = [];
  allNews = [];
  dataLocal: any;
  
  // News Highlight
  highlight = [];  

  constructor(public timeline: TimelineService, public news: BeritaService, private route: ActivatedRoute,
    private router: Router, private configService: ConfigService) {
  }

  ngOnInit() {
    this.dataLocal = JSON.parse(localStorage.getItem('newsDetail'));
    // console.log("Cek Data Local : ", this.dataLocal);

    this.getTimeline();
    this.getAllNews();

    this.getNewsDetail(this.dataLocal._id);
  }

  formatURL(data){
    return data.split(' ').join('%20');
  }

  formatImageSrc(data){
    // console.log("final", this.configService.baseUrl + "store/image/" + this.formatURL(data))
    return this.configService.baseUrl + "news/image/" + this.formatURL(data);
  }

  getTimeline(){

    this.timeline.timeline().subscribe((data)=>{
      let i;
      
      for (i=0; i < data.timelines.length; i++) {
        let id = data.timelines[i]._id;
        let date = data.timelines[i].date;
        let title = data.timelines[i].title;
        let body = data.timelines[i].body;
      
        this.timelines.push({"id": id, "date": date, "title": title, "body": body})
      }

      // console.log("Cek Timelines : ", this.timelines);
    });

  }

  getAllNews(){

    this.news.getAllNews().subscribe((data)=>{
      let i;

      this.allNews = data.news.docs

      // console.log("Cek All News : ", data)

      // News Highlight
      let highlight_1 = 2;
      let highlight_2 = 1;
      let highlight_3 = 0;

      this.highlight.push({"news_1": highlight_1, "news_2": highlight_2, "news_3": highlight_3})
    })

  }

  getNewsDetail(id) {
    this.news.getNewsDetail(id).subscribe(data => {
      if(data.status == 200) {
        this.newsDetail = data.news;
      }
    });
  }  

  getData(data){
    localStorage.setItem('newsDetail', JSON.stringify(data));
    // console.log("Cek News Detail : ", data);
  }

  imageUrl(data) {
    let link =  this.formatImageSrc(data);
    // console.log("Cek Link : ", link);
    return link
    // return this.sanitizer.bypassSecurityTrustStyle('url(' + link + ')');
  }    
}
