import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { InfoFormComponent } from './info-form/Info-form.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { ActivityFormComponent } from './activity-form/Activity-form.component';

const routes: Routes = [
	{ path: 'members', component: MembersComponent },
  { path: 'volunteers', component: VolunteersComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'reports', component: ReportsComponent },
	{ path: 'documentation', component: DocumentationComponent },
	{ path: 'info-form', component: InfoFormComponent },
  { path: 'volunteer-form', component: VolunteerFormComponent },
  { path: 'activity-form', component: ActivityFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
