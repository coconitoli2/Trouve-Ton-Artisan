import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  isModalOpen = false;
  isMenuOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
