import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MentionsLegales } from '../../pages/mentions-legales/mentions-legales';
import { DonneesPersonnelles } from '../../pages/donnees-personnelles/donnees-personnelles';
import { Accessibilite } from '../../pages/accessibilite/accessibilite';
import { Cookies } from '../../pages/cookies/cookies';


@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule, MentionsLegales, DonneesPersonnelles, Accessibilite, Cookies],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer { }
