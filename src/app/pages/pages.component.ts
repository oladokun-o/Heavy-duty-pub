import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NavList } from '../core/interfaces/nav.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  currentPage: string = 'home';
  pages: Array<NavList> = [
    { label: 'home', route: 'home' },
    { label: 'products', route: 'products',
    children: [
      {
        label: 'Equipments',
        route: 'products'
      },
      {
        label: 'Asphalt',
        route: 'products/asphalts'
      }
    ]
  },
    { label: 'services', route: 'services', children: [
      {label: 'Project Management', route: 'services'},
      {label: 'Design', route: 'services'},
      {label: 'Road Rehabilitaion', route: 'services'},
      {label: 'Full Construction', route: 'services'},
      {label: 'Street Light Installation', route: 'services'},
      {label: 'More', route: 'services'}
    ] },
    { label: 'about-us', route: 'about-us' },
    { label: 'news', route: 'news' },
    { label: 'contact', route: 'contact' },
  ];

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
    const currentPage = this.pages.find(page => currentUrl.includes(page.label));
    return currentPage?.label || 'home';
  }
}
