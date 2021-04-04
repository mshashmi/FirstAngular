import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { GraphOrgTreeComponent } from './graph-org-tree/graph-org-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphOrgTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule, 
    NgxChartsModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }