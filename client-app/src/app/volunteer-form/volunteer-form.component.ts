
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Volunteer } from '../_models/volunteer';
import { VolunteerFetchService } from '../_services/volunteer-fetch.service';




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
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.volunteer = new Volunteer();
  }


  saveVolunteer() {
    this.volunteerService.saveVolunteer(this.volunteer).toPromise().then(() => {
      window.location.reload();
    });
  }

  updateVolunteer(volunteer: Volunteer)
  {
    this.volunteerService.updateVolunteer(volunteer).toPromise().then(() => {
      window.location.reload();
    });
  }

   // OLD PART OF CODE, I WOULD KEEP IT FOR NOW
  // ------------------------------------------------------------------------------------------ //
  /*
  updateVolunteer(volunteerEmail: string)
  {
    // Delete activity by email
    this.volunteerService.deleteVolunteer(this.data.volunteer.email);


    // Add new activity
    this.volunteerService.saveVolunteer(this.data.volunteer).toPromise().then(() => {
      window.location.reload();
    });
  }
  */
 // ------------------------------------------------------------------------------------------ //

}
