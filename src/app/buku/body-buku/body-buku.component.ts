import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { ConfigService } from 'src/app/services/config.service';
import { BukuService } from 'src/app/services/buku.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-buku',
  templateUrl: './body-buku.component.html',
  styleUrls: ['./body-buku.component..scss']
})
export class BodyBukuComponent implements OnInit {

  orderBuku: FormGroup;
  timelines = [];

  constructor(public router: Router, public timeline: TimelineService, public config: ConfigService, public buku: BukuService, private formBuilder: FormBuilder) { 
    this.orderBuku = this.formBuilder.group(
      {
        fullName: [""],
        faculty: [""],
        email: [""],
        contact: [""],
        items: [""],
      }
    );
   }

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
      // console.log("Cek Timelines : ", this.timelines);
    });

  }

  postOrder() {
    this.buku.postOrderItem(this.orderBuku.value).subscribe((data) => {
      alert("Pemesanan berhasil Direkam")
      window.location.reload();
      // console.log("Cek Pesan : ", data)
    },
    err => {
      console.log('err', err);
      if (err.status == 401)
          alert("Data anda Salah");
    })
  }  
}
