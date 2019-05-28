import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { BeritaService } from 'src/app/services/berita.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-body-berita',
  templateUrl: './body-berita.component.html',
  styleUrls: ['./body-berita.component..scss']
})
export class BodyBeritaComponent implements OnInit {

  newsDetail: any;
  timelines = [];
  allNews = [];
  
  // News Highlight
  highlight = [];  

  constructor(public timeline: TimelineService, public news: BeritaService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.getTimeline();
    this.getAllNews();

    let id = this.route.snapshot.paramMap.get('id');
    this.getNewsDetail(id);
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

      console.log("Cek All News : ", data)

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
}
