import { Component } from '@angular/core';
import { StarRatingComponent } from '../../star-rating/star-rating';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home { }
