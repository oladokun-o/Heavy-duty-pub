import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NavList } from 'src/app/core/interfaces/nav.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  currentPage: string = '';
  pages: Array<NavList> = [
    // { label: 'home', route: 'home' },
  ];
  pageLoading: boolean = false;

  constructor(private router: Router) {
    this.pageLoading = true;
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(page => {
        this.pageLoading = false;
      });
  }

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
    const currentPage = this.pages.find(page => currentUrl.includes(page.label));
    return currentPage?.label || 'home';
  }
}
