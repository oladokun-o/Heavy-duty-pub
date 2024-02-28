import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../core/interfaces/auth.interface";
import { Order, OrderStatus, Product } from "../../core/interfaces/orders.interface";
import { OrdersService } from "../../core/services/orders.service";
import { UserService } from "../../core/services/users.service";
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NewUserComponent } from "./modals/new-user/new-user.component";
import { ConfirmComponent } from "./modals/confirm/confirm.component";
import { ProductComponent } from "./modals/product/product.component";
import { OrderComponent } from "./modals/order/order.component";

export class DashboardBase {
  constructor(
    public userService: UserService,
    public orderService: OrdersService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public toastr: ToastrService,
    public modal: NgbModal
  ) {
    activatedRoute?.parent?.data.subscribe(data => {
      this.orders = data && data.orders ? data.orders : [];
      if (this.orders.length === 0) this.getOrders();

      this.users = data && data.users ? data.users : [];
      if (this.users.length === 0) this.getUsers();
    })
  }

  get user(): User | null {
    return JSON.parse(sessionStorage.getItem('admin') as string);
  }

  orders: Order[] = [];
  users: User[] = [];

  orderOperationLoading: boolean = false;
  userOperationLoading: boolean = false;

  getOrders() {
    this.orderService.getOrders().subscribe(
      res => {
        this.orders = res;
      },
      err => {
        this.toastr.error(err.error.message, "Error fetching orders");
      }
    )
  }

  updateOrderStatus(id: number, status: OrderStatus) {
    this.orderOperationLoading = true;
    this.orderService.updateOrderStatus(id, status).subscribe(
      res => {
        this.orderOperationLoading = false;
        this.toastr.success(res.message);
        this.getOrders();
      },
      err => {
        this.orderOperationLoading = false;
        this.toastr.error(err.error.message, "Error updating order");
        this.getOrders();
      }
    )
  }

  deleteOrder(id: number) {
    const ref = this.modal.open(ConfirmComponent, {
      centered: true,
    });
    ref.componentInstance.text = 'Are you sure you want to delete this order?';
    ref.componentInstance.confirm = 'delete';
    ref.componentInstance.type = 'danger';
    ref.closed.subscribe(() => {
      this.orderOperationLoading = true;
      this.orderService.deleteOrder(id).subscribe(
        res => {
          this.orderOperationLoading = false;
          this.toastr.success(res.message);
          this.getOrders();
        },
        err => {
          this.orderOperationLoading = false;
          this.toastr.error(err.error.message, "Error deleting order");
          this.getOrders();
        }
      )
    })
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        this.toastr.error(err.error.message, "Error fetching users");
      }
    )
  }

  createUser() {
    const ref = this.modal.open(NewUserComponent, {
      centered: true,
    });
    ref.closed.subscribe((payload: { email: string, password: string }) => {
      this.proceedToCreatingUser(payload);
    })
  }

  proceedToCreatingUser(payload: { email: string, password: string }) {
    this.userOperationLoading = true;
    this.userService.createUser(payload).subscribe(
      res => {
        this.userOperationLoading = false;
        this.toastr.success(res.message);
        this.getUsers();
      },
      err => {
        this.userOperationLoading = false;
        this.toastr.error(err.error.message, "Error creating user");
        this.getUsers();
      }
    )
  }

  updateUser(id: number, payload: { email: string, password: string }) {
    this.userOperationLoading = true;
    this.userService.updateteUser(id, payload).subscribe(
      res => {
        this.userOperationLoading = false;
        this.toastr.success(res.message);
        this.getUsers();
      },
      err => {
        this.userOperationLoading = false;
        this.toastr.error(err.error.message, "Error updating user");
        this.getUsers();
      }
    )
  }

  deleteUser(id: number) {
    const ref = this.modal.open(ConfirmComponent, {
      centered: true,
    });
    ref.componentInstance.text = 'Are you sure you want to delete this user?';
    ref.componentInstance.confirm = 'delete';
    ref.componentInstance.type = 'danger';
    ref.closed.subscribe(() => {
      this.userOperationLoading = true;
      this.userService.deleteUser(id).subscribe(
        res => {
          this.userOperationLoading = false;
          this.toastr.success(res.message);
          this.getUsers();
        },
        err => {
          this.userOperationLoading = false;
          this.toastr.error(err.error.message, "Error deleting user");
          this.getUsers();
        }
      )
    })
  }

  viewProduct(order: Order) {
    const ref = this.modal.open(ProductComponent, {
      centered: true,
    });
    ref.componentInstance.products = order.products;
    ref.componentInstance.order_id = order.order_id;
  }

  editOrder(order: Order) {
    const ref = this.modal.open(OrderComponent, {
      centered: true,
    });
    ref.componentInstance.order = order;
    ref.closed.subscribe((status: OrderStatus) => {
      this.updateOrderStatus(order.order_id, status);
    })
  }

}
