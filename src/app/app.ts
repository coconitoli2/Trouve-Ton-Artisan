import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home, } from './pages/home/home';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Batiment } from './pages/batiment/batiment';
import { Fabrication } from './pages/fabrication/fabrication';
import { Alimentation } from './pages/alimentation/alimentation';
import { Services } from './pages/services/services';
import { ArtisanAbt1 } from './pages/artisan-abt1/artisan-abt1';
import { ArtisanAbt2 } from './pages/artisan-abt2/artisan-abt2';
import { ArtisanAbt3 } from './pages/artisan-abt3/artisan-abt3';
import { ArtisanAbt4 } from './pages/artisan-abt4/artisan-abt4';
import { ArtisanAbt5 } from './pages/artisan-abt5/artisan-abt5';
import { ArtisanAbt6 } from './pages/artisan-abt6/artisan-abt6';
import { ArtisanAbt7 } from './pages/artisan-abt7/artisan-abt7';
import { ArtisanAbt8 } from './pages/artisan-abt8/artisan-abt8';
import { ArtisanAbt9 } from './pages/artisan-abt9/artisan-abt9';
import { ArtisanAbt10 } from './pages/artisan-abt10/artisan-abt10';
import { ArtisanAbt11 } from './pages/artisan-abt11/artisan-abt11';
import { ArtisanAbt12 } from './pages/artisan-abt12/artisan-abt12';
import { ArtisanAbt13 } from './pages/artisan-abt13/artisan-abt13';
import { ArtisanAbt14 } from './pages/artisan-abt14/artisan-abt14';
import { ArtisanAbt15 } from './pages/artisan-abt15/artisan-abt15';
import { ArtisanAbt16 } from './pages/artisan-abt16/artisan-abt16';
import { ArtisanAbt17 } from './pages/artisan-abt17/artisan-abt17';
import { ArtisanAbt18 } from './pages/artisan-abt18/artisan-abt18';
import { ArtisanAbt19 } from './pages/artisan-abt19/artisan-abt19';
import { ArtisanAbt20 } from './pages/artisan-abt20/artisan-abt20';
import { ArtisanAbt21 } from './pages/artisan-abt21/artisan-abt21';
import { ArtisanAbt22 } from './pages/artisan-abt22/artisan-abt22';
import { ArtisanAbt23 } from './pages/artisan-abt23/artisan-abt23';
import { ArtisanAbt24 } from './pages/artisan-abt24/artisan-abt24';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, Header, RouterOutlet, RouterLink, Home, PageNotFound, Batiment, Fabrication, Alimentation, Services, ArtisanAbt1, ArtisanAbt2, ArtisanAbt3, ArtisanAbt4, ArtisanAbt5, ArtisanAbt6, ArtisanAbt7, ArtisanAbt8, ArtisanAbt9, ArtisanAbt10, ArtisanAbt11, ArtisanAbt12, ArtisanAbt13, ArtisanAbt14, ArtisanAbt15, ArtisanAbt16, ArtisanAbt17, ArtisanAbt18, ArtisanAbt19, ArtisanAbt20, ArtisanAbt21, ArtisanAbt22, ArtisanAbt23, ArtisanAbt24],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }