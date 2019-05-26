import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { BeritaService } from 'src/app/services/berita.service';

@Component({
  selector: 'app-body-berita',
  templateUrl: './body-berita.component.html',
  styleUrls: ['./body-berita.component..scss']
})
export class BodyBeritaComponent implements OnInit {

  constructor(public timeline: TimelineService, public news: BeritaService) {   }

  timelines = [];
  allNews = [];
  
  // News Highlight
  highlight = [];


  ngOnInit() {
    this.getTimeline();
    this.getAllNews();

    console.log("cek index : ", this.highlight)

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

      for (i=0; i < data.news.docs.length; i++) {
        let id = data.news.docs[i]._id;
        let summary = data.news.docs[i].summary;
        let body = data.news.docs[i].body;
        let title = data.news.docs[i].title;
        let imageCover = data.news.docs[i].imageCover;
      
        this.allNews.push({"id": id, "summary": summary, "body": body, "title": title, "imageCover": imageCover})
      }

      console.log("Cek All News : ", data)

      // News Highlight
      let highlight_1 = 2;
      let highlight_2 = 1;
      let highlight_3 = 0;

      this.highlight.push({"news_1": highlight_1, "news_2": highlight_2, "news_3": highlight_3})
      // this.highlight = [highlight_1, highlight_2, highlight_3];


    })

  }
}
