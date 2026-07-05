import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-star-rating-component',
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
}