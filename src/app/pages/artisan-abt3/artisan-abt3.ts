import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from '../../star-rating/star-rating';
@Component({
  selector: 'app-artisan-abt3',
  imports: [StarRatingComponent, CommonModule, RouterModule],
  templateUrl: './artisan-abt3.html',
  styleUrl: './artisan-abt3.scss',
})
export class ArtisanAbt3 { }
