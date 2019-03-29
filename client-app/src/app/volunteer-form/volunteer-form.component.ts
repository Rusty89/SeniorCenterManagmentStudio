
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Volunteer } from '../_models/volunteer';
import { VolunteerFetchService } from '../_services/volunteer-fetch.service';

import { VolunteersComponent } from '../volunteers/volunteers.component';


@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {


  volunteer: Volunteer;

  constructor(
    private volunteerService: VolunteerFetchService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.volunteer = new Volunteer();
  }


  saveVolunteer() {
    this.volunteerService.saveVolunteer(this.volunteer).toPromise().then(() => {
      //this.router.navigate(['volunteers']);
      this.router.navigate([VolunteersComponent]);
    });
  }

  updateVolunteer(volunteerEmail: string)
  {
    // Delete activity by email
    this.volunteerService.deleteVolunteer(this.data.volunteer.email);


    // Add new activity
    this.volunteerService.saveVolunteer(this.data.volunteer).toPromise().then(() => {
      this.router.navigate([VolunteersComponent]);
    });
  }

}
