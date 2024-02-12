import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  currentPage: string = 'home';
  pages: Array<string> = ['home', 'products', 'services', 'about-us', 'news', 'contact'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getCurrentPage())
      )
      .subscribe(page => {
        this.currentPage = page;
      });

    // Set initial current page
    this.currentPage = this.getCurrentPage();
  }

  getCurrentPage(): string {
    const currentUrl = this.router.url;
    const currentPage = this.pages.find(page => currentUrl.includes(page));
    return currentPage || 'home';
  }
}
