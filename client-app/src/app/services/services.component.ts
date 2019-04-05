import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ActivityFormComponent } from '.././activity-form/activity-form.component';
import { ActivityFetchService } from '../_services/activity-fetch.service';

import { ActivityInvFormComponent } from '.././activity-involvement/activity-inv-form.component';
import { ActivityInvFetchService } from '../_services/activity-involvement-fetch.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  constructor(
    private activityService: ActivityFetchService,
    private activityInvService: ActivityInvFetchService,
    private router: Router,
    public dialog: MatDialog) { }

  public activities;
  private involvements;


  ngOnInit() {
    this.loadActivities();

    // Load all Involvements, and after we will send all these data into Involvement-Form
    this.loadInvolvements();
  }

  private loadActivities() {
    this.activityService.getActivities().subscribe(
      data => { this.activities = data },
      err => console.error(err),
      () => console.log("activities loaded.")
    );
  }

  // Load all Involvement Data
  private loadInvolvements() {
    this.activityInvService.getInvolvements().subscribe(
      data => { this.involvements = data },
      err => console.error(err),
      () => console.log("involvements loaded.")
    );

    // --------------------------------------------------- //
    // IS NOT WORKING
    //this.loadInvolvement(this.involvements);
    // --------------------------------------------------- //
  }

  deleteActivity(activityEmail: string) {
    this.activityService.deleteActivity(activityEmail).subscribe(() => {
      this.loadActivities();
    });
  }

  // Send data into update dialog
  // ================================================================================== //
  openUpdateDialog(activityEmail: string): void {

    // Get all activities and find one activity by email
    // --------------------------------------------------------------------- //
    this.loadActivities();
    var tmp;

    // Loop via activities and find specific activity by email
    this.activities.forEach((activity) => {
      if (activity.email === activityEmail) {
        tmp = activity;
      }
    });
    // --------------------------------------------------------------------- //

    // Open update dialog and sent data into update dialog
    const dialogRef = this.dialog.open(ActivityFormComponent, {
      data: {
        activity: tmp
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadActivities();

      console.log('Update dialog was closed');
    });
  }
  // ================================================================================== //

  // opens modal to sate new activity
  addActivity(): void {
    // Possible it is good idea to create new empty involvement right after new activity is created
    // and after you clicked on Members in you be able just to add new member to current activity/involvement

    const dialogRef = this.dialog.open(ActivityFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadActivities();

      console.log('The dialog was closed');
    });
  }

  // opens modal to add involvement
  addInvolvement(activityEmail: string): void {

    // Get all activities and find one activity by email
    // --------------------------------------------------------------------- //
    this.loadActivities();
    var tmp;

    // Loop via activities and find specific activity by email
    this.activities.forEach((activity) => {
      if (activity.email === activityEmail) {
        tmp = activity;
      }
    });
    // --------------------------------------------------------------------- //

    // Open update dialog and sent data into update dialog
    const dialogRef = this.dialog.open(ActivityInvFormComponent, {
      data: {
        activity: tmp,
        involvements: this.involvements // all involvements
      }
    });

  
    dialogRef.afterClosed().subscribe(result => {
      this.loadActivities();

      console.log('Update dialog was closed');
    });
  }
}


