import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';
import { CartModalsModule } from './components/cart/modals/modals.module';
import { NumbersOnlyDirective } from './directives/NumbersOnly.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { SharedPipesModule } from './pipes/shared-pipes.module';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    CartModalsModule,
    SharedPipesModule
  ],
  exports: [
    CommonModule,
    SharedComponentsModule,
    LoaderComponent,
    SharedPipesModule
  ]
})
export class SharedModule { }
