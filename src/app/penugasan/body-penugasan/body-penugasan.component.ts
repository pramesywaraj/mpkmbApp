import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { PenugasanService } from 'src/app/services/penugasan.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigService } from 'src/app/services/config.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-body-penugasan',
  templateUrl: './body-penugasan.component.html',
  styleUrls: ['./body-penugasan.component..scss']
})
export class BodyPenugasanComponent implements OnInit {

  constructor(public timeline: TimelineService, public penugasan: PenugasanService, private sanitizer: DomSanitizer, private configService: ConfigService) {   }

  timelines = [];
  categories = [];

  ngOnInit() {
    this.getTimeline();
    this.getAllCategories();
  }

  formatURL(data){
    return data.split(' ').join('%20');
  }

  formatImageSrc(data){
    // console.log("final", this.configService.baseUrl + "store/image/" + this.formatURL(data))
    return this.configService.baseUrl + "task/image/" + this.formatURL(data);
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

  getAllCategories(){
    this.penugasan.getCategories().subscribe((data)=>{
      this.categories = data.categories;

      // console.log("Cek Kategori : ", this.categories);
    });
  }


}
