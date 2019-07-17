import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BukuComponent } from './buku/buku.component';
import { BeritaComponent } from './berita/berita.component';
import { PenugasanComponent } from './penugasan/penugasan.component';
import { GaleriComponent } from './galeri/galeri.component';
import { KontakComponent } from './kontak/kontak.component';
import { StoreComponent } from './store/store.component';
import { ArtikelComponent } from './artikel/artikel.component';

const routes: Routes = [
  { path: '',
    component: HomepageComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'buku',
    component: BukuComponent,
  },

  {
    path: 'berita',
    component: BeritaComponent,
  },

  {
    path: 'artikel/:id',
    component: ArtikelComponent,
  },

  {
    path: 'penugasan',
    component: PenugasanComponent,
  },

  {
    path: 'galeri',
    component: GaleriComponent,
  },

  {
    path: 'kontak',
    component: KontakComponent,
  },

  {
    path: 'store',
    component: StoreComponent,
  },

  {
    path: '**',
    redirectTo: 'homepage'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
