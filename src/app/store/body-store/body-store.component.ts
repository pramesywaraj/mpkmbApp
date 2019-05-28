import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-body-store',
  templateUrl: './body-store.component.html',
  styleUrls: ['./body-store.component..scss']
})
export class BodyStoreComponent implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService, public store: StoreService) { }

  stores = [];

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    this.store.getStoreItem().subscribe((data)=>{
      this.stores = data.stores.docs;

      console.log("Cek Items : ", this.stores);
    });
  }


}
