import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-homepage',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component..scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
