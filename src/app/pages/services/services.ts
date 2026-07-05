import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from '../../star-rating/star-rating';
@Component({
  selector: 'app-services',
  imports: [RouterLink, StarRatingComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services { }
