import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { PenugasanService } from 'src/app/services/penugasan.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-body-penugasan',
  templateUrl: './body-penugasan.component.html',
  styleUrls: ['./body-penugasan.component..scss']
})
export class BodyPenugasanComponent implements OnInit {

  constructor(public timeline: TimelineService, public penugasan: PenugasanService, private sanitizer: DomSanitizer) {   }

  timelines = [];
  categories = [];

  ngOnInit() {
    this.getTimeline();
    this.getAllCategories();
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
      console.log("Cek Timelines : ", this.timelines);
    });

  }

  getAllCategories(){
    this.penugasan.getCategories().subscribe((data)=>{
      this.categories = data.categories;

      console.log("Cek Kategori : ", this.categories);
    });
  }

  // getImage(id){
  //   id = "5cec670c229d4b69a848b62d.jpg";
  //   this.penugasan.getImage(id).subscribe((data)=>{
  //     // this.categories = data.categories;

  //     console.log("Cek Gambar : ", data);
  //   });

  // }

  // imageUrl(i) {
  //   let url = this.categories[0].tasks[i].url
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }  

  // imageUrl2(i, j) {
  //   let url = this.categories[i].tasks[j].url
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }  

}
