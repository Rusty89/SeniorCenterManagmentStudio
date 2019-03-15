import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatDialogModule } from "@angular/material";

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { MembersComponent } from './members/members.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';

import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';

import { MemberFetchService } from './_services/member-fetch.service';
import { UserAuthenticationDataService } from './_services/user-authentication-data.service';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
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
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatDialogModule,
        routing
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        MemberFetchService,
        UserAuthenticationDataService

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }