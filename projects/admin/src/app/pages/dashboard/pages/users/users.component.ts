import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'projects/admin/src/app/core/services/users.service';
import { OrdersService } from 'projects/admin/src/app/core/services/orders.service';
import { DashboardBase } from '../../DasboardBase';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends DashboardBase implements OnInit {

  constructor(
    public userService: UserService,
    public orderService: OrdersService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public toastr: ToastrService,
    public modal: NgbModal
  ) {
    super(userService, orderService, router, activatedRoute, toastr, modal);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
