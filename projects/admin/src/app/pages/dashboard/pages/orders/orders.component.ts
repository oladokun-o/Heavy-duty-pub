import { Component, OnInit } from '@angular/core';
import { DashboardBase } from '../../DasboardBase';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'projects/admin/src/app/core/services/users.service';
import { OrdersService } from 'projects/admin/src/app/core/services/orders.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderStatus } from 'projects/admin/src/app/core/interfaces/orders.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends DashboardBase implements OnInit {

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

  ngOnInit(): void { }

  getStatusColor(status: OrderStatus): string {
    switch (status.toLocaleLowerCase()) {
      case OrderStatus.Pending:
        return 'warning'; // CSS class for pending status
      case OrderStatus.Processing:
        return 'primary'; // CSS class for processing status
      case OrderStatus.Completed:
        return 'success'; // CSS class for completed status
      case OrderStatus.Cancelled:
        return 'danger'; // CSS class for cancelled status
      case OrderStatus.Delivered:
        return 'success'; // CSS class for delivered status
      case OrderStatus.Shipped:
        return 'success'; // CSS class for shipped status
      default:
        return '';
    }
  }
}
