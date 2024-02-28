import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';
import { OrdersService } from '../../core/services/orders.service';
import { UserService } from '../../core/services/users.service';
import { DashboardBase } from './DasboardBase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends DashboardBase implements OnInit {

  pageLoading: boolean = false;

  constructor(
    public userService: UserService,
    public orderService: OrdersService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public toastr: ToastrService,
    public modal: NgbModal
  ) {
    super(userService, orderService, router, activatedRoute, toastr, modal);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pageLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.pageLoading = false;
      }
    });
  }

  ngOnInit(): void { }

}
