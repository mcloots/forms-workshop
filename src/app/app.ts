import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);

  // signal for mobile menu state
  menuOpen = signal(false);

  constructor() {
    // Close the menu on route change
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) this.menuOpen.set(false);
    });
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
