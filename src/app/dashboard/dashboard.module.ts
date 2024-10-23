import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DriverPayComponent} from './driver-pay/driver-pay.component';
import {HeaderComponent} from './header/header.component';
import {MaterialModule} from "../shared/module/material/material.module";

@NgModule({
  declarations: [
    DriverPayComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
    DriverPayComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ]
})
export class DashboardModule {
}
