import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from '../../star-rating/star-rating';

@Component({
  selector: 'app-batiment',
  imports: [RouterLink, StarRatingComponent],
  templateUrl: './batiment.html',
  styleUrl: './batiment.scss',
})
export class Batiment { }
