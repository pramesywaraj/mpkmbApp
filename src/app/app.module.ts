import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularFireModule } from '@angular/fire';  
import { environment } from '../environments/environment'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { BodyComponent } from './homepage/body/body.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { BeritaComponent } from './berita/berita.component';
import { BukuComponent } from './buku/buku.component';
import { PenugasanComponent } from './penugasan/penugasan.component';
import { GaleriComponent } from './galeri/galeri.component';
import { KontakComponent } from './kontak/kontak.component';
import { StoreComponent } from './store/store.component';
import { BodyBukuComponent } from './buku/body-buku/body-buku.component';
import { BodyBeritaComponent } from './berita/body-berita/body-berita.component';
import { BodyPenugasanComponent } from './penugasan/body-penugasan/body-penugasan.component';
import { BodyGaleriComponent } from './galeri/body-galeri/body-galeri.component';
import { BodyKontakComponent } from './kontak/body-kontak/body-kontak.component';
import { BodyStoreComponent } from './store/body-store/body-store.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { BodyArtikelComponent } from './artikel/body-artikel/body-artikel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BeritaComponent,
    BukuComponent,
    PenugasanComponent,
    GaleriComponent,
    KontakComponent,
    StoreComponent,
    BodyBukuComponent,
    BodyBeritaComponent,
    BodyPenugasanComponent,
    BodyGaleriComponent,
    BodyKontakComponent,
    BodyStoreComponent,
    ArtikelComponent,
    BodyArtikelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
