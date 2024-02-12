import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() currentPage: string = '';
  @Input() pages: Array<string> = [];

  onCloseSideBar(el: HTMLDivElement) {
    el.classList.remove('uk-offcanvas-overlay', 'uk-open');
  }
}
