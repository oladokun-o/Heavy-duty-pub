import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { LayoutData } from 'src/app/core/interfaces/index.interface';
import { NavList } from 'src/app/core/interfaces/nav.interface';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() currentPage: string = '';
  @Input() pages: Array<NavList> = [];

  constructor(
    private generalService: GeneralService,
  ) {
    this.getLayoutData();
  }

  layoutData: LayoutData | null = null;

  getLayoutData() {
    this.generalService.getLayout().subscribe((data) => {
      this.layoutData = data;
    });
  }
}
