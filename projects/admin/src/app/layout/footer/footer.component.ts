import { Component, Input } from '@angular/core';
import { NavList } from 'src/app/core/interfaces/nav.interface';

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
}
