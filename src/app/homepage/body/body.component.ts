import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
  selector: 'app-body-homepage',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component..scss']
})
export class BodyComponent implements OnInit {

  constructor(public timeline: TimelineService) { }

  ngOnInit() {
    this.getTimeline();
  }

  getTimeline(){
    // console.log('check boi');
    this.timeline.timeline().subscribe((data)=>{
      console.log('Cek Data : ', data);
    });
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
