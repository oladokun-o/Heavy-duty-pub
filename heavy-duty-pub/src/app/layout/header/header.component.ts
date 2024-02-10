import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
