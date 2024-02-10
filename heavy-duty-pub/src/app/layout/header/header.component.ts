import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  currentPage: string = 'home';
  pages: Array<string> = ['home', 'products', 'services', 'about-us', 'news', 'contact'];
  private routeSubscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.routeSubscription = activatedRoute.url.subscribe(url => {
      if (url.length > 0) {
        const segment = url[0];
        this.currentPage = segment.path !== '' ? segment.path : 'home';
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
