import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from '../../star-rating/star-rating';
@Component({
  selector: 'app-fabrication',
  imports: [RouterLink, StarRatingComponent],
  templateUrl: './fabrication.html',
  styleUrl: './fabrication.scss',
})
export class Fabrication { }
