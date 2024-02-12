import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => this.activatedRoute),
    //   map(route => {
    //     while (route.firstChild) route = route.firstChild;
    //     return route;
    //   }),
    //   mergeMap(route => route.data)
    // )
    //   .subscribe(data => {
        this.titleService.setTitle("Heavy Duty Pub");
      // });
  }
}
