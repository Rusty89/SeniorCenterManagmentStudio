import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { InfoFormComponent } from './info-form/Info-form.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { ActivityFormComponent } from './activity-form/Activity-form.component';
import { MemberFetchService } from './api-services/member-fetch.service';



import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import{MatButtonModule, MatCheckboxModule,MatTableModule,MatDialogModule,}from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    VolunteersComponent,
    ServicesComponent,
    ReportsComponent,
    DocumentationComponent,
    InfoFormComponent,
    VolunteerFormComponent,
    ActivityFormComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatCheckboxModule,
	MatTableModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
	MatDialogModule
  ],
  
  
  providers: [MemberFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
