import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    ServicesComponent,
    ReportsComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
