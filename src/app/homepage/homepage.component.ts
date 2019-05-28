import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../services/timeline.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component..scss']
})
export class HomepageComponent implements OnInit {

  constructor(public timeline: TimelineService) { }

  ngOnInit() {
    this.getTimeline();
  }

  getTimeline(){
    // console.log('check boi');
    // this.timeline.timeline().subscribe((data)=>{
    //   console.log('test', data);
    // });
  }


}
