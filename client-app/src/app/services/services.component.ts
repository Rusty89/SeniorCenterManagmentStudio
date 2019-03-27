import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ActivityFormComponent } from '.././activity-form/Activity-form.component';

import { ActivityFetchService } from '../_services/activity-fetch.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private activityService: ActivityFetchService, private router:Router, public dialog: MatDialog) { }

  public activities;

  // TEST
  public activityTmp;

  ngOnInit() {
    this.loadActivities();
  }

  private loadActivities() {
    this.activityService.getActivities().subscribe(
      data => { this.activities = data },
      err => console.error(err),
      () => console.log("activities loaded.")
    );
  }

  deleteActivity(activityEmail: string) {
    this.activityService.deleteActivity(activityEmail).subscribe(() => {
      this.loadActivities();
    });
  }

  // TEST
  // ================================================================================== //
  openUpdateDialog(activityEmail: string): void {
    const dialogRef = this.dialog.open(ActivityFormComponent);

    this.loadActivities();

    // Loop via activities and find specific activity by email
    this.activities.forEach((activity) => {
      if (activity.email === activityEmail)
      {
        this.activityTmp = activity;
        console.log("From activities: " + activity.email);
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Update dialog: ' + activityEmail);
    });
  }

  // TEST
  updateActivity(activityEmail: string)
  {

  }
  // ================================================================================== //

  // opens modal
  openDialog(): void {
    const dialogRef = this.dialog.open(ActivityFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


