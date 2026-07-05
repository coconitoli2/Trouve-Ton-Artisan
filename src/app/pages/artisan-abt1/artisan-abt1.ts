import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from '../../star-rating/star-rating';

@Component({
  selector: 'app-artisan-abt1',
  imports: [CommonModule, RouterModule, StarRatingComponent],
  templateUrl: './artisan-abt1.html',
  styleUrl: './artisan-abt1.scss',
})
export class ArtisanAbt1 { }
