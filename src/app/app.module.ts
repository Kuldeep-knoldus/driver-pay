import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {DashboardModule} from "./dashboard/dashboard.module";
import {MaterialModule} from "./shared/module/material/material.module";
import {BreadcrumbsComponent} from "ngx-breadcrumpy";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DashboardModule,
    BreadcrumbsComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
