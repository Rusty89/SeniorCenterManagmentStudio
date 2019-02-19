import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { InfoFormComponent } from './info-form/Info-form.component';
import { ActivityFormComponent } from './activity-form/Activity-form.component';

const routes: Routes = [
	{ path: 'members', component: MembersComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'reports', component: ReportsComponent },
	{ path: 'documentation', component: DocumentationComponent },
	{ path: 'info-form', component: InfoFormComponent },
  { path: 'activity-form', component: ActivityFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
