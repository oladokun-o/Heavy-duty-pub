import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { CheckoutPagesRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutModalsModule } from './modals/modals.module';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CheckoutPagesRoutingModule,
    SharedModule,
    NgbTooltipModule,
    CheckoutModalsModule,
    NgSelectModule
  ]
})
export class CheckoutModule { }
