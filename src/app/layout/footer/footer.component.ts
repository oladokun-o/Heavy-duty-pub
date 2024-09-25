import { Component, Input } from '@angular/core';
import { LayoutData } from 'src/app/core/interfaces/index.interface';
import { NavList } from 'src/app/core/interfaces/nav.interface';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() currentPage: string = '';
  @Input() pages: Array<NavList> = [];
  @Input() isCartPage: boolean = false;

  onCloseSideBar(el: HTMLDivElement) {
    el.classList.remove('uk-offcanvas-overlay', 'uk-open');
  }

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
