import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { StarRatingComponent } from '../../star-rating/star-rating';
@Component({
  selector: 'app-alimentation',
  imports: [RouterLink, StarRatingComponent],
  templateUrl: './alimentation.html',
  styleUrl: './alimentation.scss',
})
export class Alimentation { }
