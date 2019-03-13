import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { MembersComponent } from './members/members.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { InfoFormComponent } from './info-form/Info-form.component';
import { ActivityFormComponent } from './activity-form/Activity-form.component';
import { MemberFetchService } from './api-services/member-fetch.service';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        MembersComponent,
        //InfoFormComponent,
       // VolunteersComponent,
      //  VolunteerFormComponent,
      //  ServicesComponent,
      ////  ReportsComponent,
      //  DocumentationComponent,

       // ActivityFormComponent

    ],

        // { path: 'volunteers', component: VolunteersComponent },
    // { path: 'services', component: ServicesComponent },
    // { path: 'reports', component: ReportsComponent },
    // { path: 'documentation', component: DocumentationComponent },
    // { path: 'info-form', component: InfoFormComponent },
    // { path: 'volunteer-form', component: VolunteerFormComponent },
    // { path: 'activity-form', component: ActivityFormComponent },
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,


        MemberFetchService

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }