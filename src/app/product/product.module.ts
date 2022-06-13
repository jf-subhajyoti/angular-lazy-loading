import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductModule {
  constructor() {
    console.log('Product Module');
  }
}
