import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { VolunteerFormComponent } from '.././volunteer-form/volunteer-form.component';


import { VolunteerFetchService } from '../_services/volunteer-fetch.service';



@Component({
  selector: 'app-services',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {


  constructor(private volunteerService: VolunteerFetchService, private router:Router, public dialog: MatDialog) { }

  public volunteers;

  ngOnInit() {
    this.loadVolunteers();
  }

  private loadVolunteers() {
    this.volunteerService.getVolunteers().subscribe(
      data => { this.volunteers = data },
      err => console.error(err),
      () => console.log("volunteers loaded.")
    );
  }

  deleteVolunteer(volunteerEmail: string) {
    this.volunteerService.deleteVolunteer(volunteerEmail).subscribe(() => {
      this.loadVolunteers();
    });
  }

  // Send data into update dialog
  // ================================================================================== //
  openUpdateDialog(volunteerEmail: string): void {
    
    // Get all activities and find one activity by email
    // --------------------------------------------------------------------- //
    this.loadVolunteers();
    var tmp;

    // Loop via activities and find specific activity by email
    this.volunteers.forEach((volunteer) => {
      if (volunteer.email === volunteerEmail)
      {
        tmp = volunteer;
      }
    });
    // --------------------------------------------------------------------- //
    
    // Open update dialog and sent data into update dialog
    const dialogRef = this.dialog.open(VolunteerFormComponent, {
      data: {
        volunteer: tmp
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.loadVolunteers();
      
      console.log('Update dialog was closed');
    });
  }
  // ================================================================================== //

  openDialog(): void {
    const dialogRef = this.dialog.open(VolunteerFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      //this.router.navigate([MembersComponent]);
      this.loadVolunteers();
      console.log('The dialog was closed');
    });

  }
}
