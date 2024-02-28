import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NavList } from 'src/app/core/interfaces/nav.interface';
import { UserService } from '../core/services/users.service';
import { User } from '../core/interfaces/auth.interface';
import { AuthService } from '../core/services/auth.service';

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

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pageLoading = true;
        this.check();
      } else if (event instanceof NavigationEnd) {
        this.pageLoading = false;
        this.check();
      }
    });
  }

  check() {
    this.pages = [];
    if (this.user) {
      this.currentPage = 'orders';
      this.pages = [
        { label: 'Orders', route: '/dashboard/orders' },
      ];

      if (this.user.level === "superadmin") {
        this.pages.push({ label: 'User Management', route: '/dashboard/users' });
      }

      if (this.user) {
        this.pages.push({ label: 'Logout', route: '/logout' })
      }
    }
  }

  get user(): User | null {
    return JSON.parse(sessionStorage.getItem('admin') as string);
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
