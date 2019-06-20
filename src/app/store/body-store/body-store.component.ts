import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-body-store',
  templateUrl: './body-store.component.html',
  styleUrls: ['./body-store.component..scss']
})
export class BodyStoreComponent implements OnInit {

  orderItem: FormGroup;

  constructor(public router: Router, private httpClient: HttpClient, private configService: ConfigService, public store: StoreService, private formBuilder: FormBuilder) {
    this.orderItem = this.formBuilder.group(
      {
        fullName: [""],
        faculty: [""],
        email: [""],
        contact: [""],
        items: [""],
      }
    );

   }

  stores = [];

  ngOnInit() {
    this.getItem();
  }

  formatURL(data){
    return data.split(' ').join('%20');
  }

  formatImageSrc(data){
    // console.log("final", this.configService.baseUrl + "store/image/" + this.formatURL(data))
    return this.configService.baseUrl + "store/image/" + this.formatURL(data)
  }

  getItem(){
    this.store.getStoreItem().subscribe((data)=>{
      this.stores = data.stores.docs;

      console.log("Cek Items : ", this.stores);
    });
  }

  postOrder() {
    this.store.postOrderItem(this.orderItem.value).subscribe((data) => {
      alert("Pemesanan berhasil Direkam")
      window.location.reload();
      console.log("Cek Pesan : ", data)
    },
    err => {
      console.log('err', err);
      if (err.status == 401)
          alert("Data anda Salah");
    })
  }  

  formatPrice(value) {
    let val = (value/1)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
}
