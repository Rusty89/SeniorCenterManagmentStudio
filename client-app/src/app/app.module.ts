import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { InfoFormComponent } from './info-form/Info-form.component';
import { ActivityFormComponent } from './activity-form/Activity-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    ServicesComponent,
    ReportsComponent,
    DocumentationComponent,
    InfoFormComponent,
    ActivityFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
