import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
  selector: 'app-body-homepage',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component..scss']
})
export class BodyComponent implements OnInit {

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

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
