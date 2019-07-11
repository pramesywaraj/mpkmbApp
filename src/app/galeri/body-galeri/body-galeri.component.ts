import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { GaleriService } from 'src/app/services/galeri.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-body-galeri',
  templateUrl: './body-galeri.component.html',
  styleUrls: ['./body-galeri.component..scss']
})
export class BodyGaleriComponent implements OnInit {

  constructor(public timeline: TimelineService, public galeri: GaleriService, private sanitizer: DomSanitizer) { 
    this.getTimeline();
   }

  timelines = [];
  galeries = [];
  videos = [];
  categories = [];

  ngOnInit() {
    this.getGaleriesImages();
    this.getCategory();
    this.getVideos();
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
      // console.log("Cek Timelines : ", this.timelines);
    });

  }

  getGaleriesImages(){
    this.galeri.getAllGaleriesImages().subscribe((data)=>{
      this.galeries = data.imageGalery;

      // console.log("Cek Galeri : ", this.galeries);
    });
  }

  getCategory(){
    this.galeri.getAllCategories().subscribe((data)=>{
      this.categories = data.categories;

      // console.log("Cek Kategori : ", this.categories);
    });
  }

  getVideos(){
    this.galeri.getAllVideos().subscribe((data)=>{
      this.videos = data.videoGaleries;

      // console.log("Cek Videos : ", this.videos);
    });
  }

  videoUrl(i) {
    let url = this.videos[i].url;
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url);
  }  

  imageUrl(data) {
    let link = data;
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }  
  
}
