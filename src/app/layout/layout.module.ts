import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PublicLayoutComponent} from './public-layout/public-layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    PublicLayoutComponent
  ],
  declarations: [
    PublicLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class LayoutModule {
}
