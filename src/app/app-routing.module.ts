import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BukuComponent } from './buku/buku.component';
import { BeritaComponent } from './berita/berita.component';
import { PenugasanComponent } from './penugasan/penugasan.component';
import { GaleriComponent } from './galeri/galeri.component';
import { KontakComponent } from './kontak/kontak.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  { path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },

  {
    path: 'buku',
    component: BukuComponent,
  },
  { path: '',
    redirectTo: '/buku',
    pathMatch: 'full'
  },

  {
    path: 'berita',
    component: BeritaComponent,
  },
  { path: '',
    redirectTo: '/berita',
    pathMatch: 'full'
  },

  {
    path: 'penugasan',
    component: PenugasanComponent,
  },
  { path: '',
    redirectTo: '/penugasan',
    pathMatch: 'full'
  },

  {
    path: 'galeri',
    component: GaleriComponent,
  },
  { path: '',
    redirectTo: '/galeri',
    pathMatch: 'full'
  },

  {
    path: 'kontak',
    component: KontakComponent,
  },
  { path: '',
    redirectTo: '/kontak',
    pathMatch: 'full'
  },

  {
    path: 'store',
    component: StoreComponent,
  },
  { path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
