import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
  selector: 'app-body-penugasan',
  templateUrl: './body-penugasan.component.html',
  styleUrls: ['./body-penugasan.component..scss']
})
export class BodyPenugasanComponent implements OnInit {

  constructor(public timeline: TimelineService) {   }

  timelines = [];

  ngOnInit() {
    this.getTimeline();
  }

  getTimeline(){

    this.timeline.timeline().subscribe((data)=>{
      // let timelines = [];
      let i;

      for (i=0; i < data.timelines.length; i++) {
        let id = data.timelines[i]._id;
        let date = data.timelines[i].date;
        let title = data.timelines[i].title;
        let body = data.timelines[i].body;
      
        this.timelines.push({"id": id, "date": date, "title": title, "body": body})
      }
      console.log("Cek Timelines : ", this.timelines);
    });

  }

}
