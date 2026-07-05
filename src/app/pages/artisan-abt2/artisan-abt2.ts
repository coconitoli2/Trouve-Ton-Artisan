import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from '../../star-rating/star-rating';

@Component({
  selector: 'app-artisan-abt2',
  imports: [StarRatingComponent, CommonModule, RouterModule],
  templateUrl: './artisan-abt2.html',
  styleUrl: './artisan-abt2.scss',
})
export class ArtisanAbt2 { }
