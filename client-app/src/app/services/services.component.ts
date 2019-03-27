import { Component, OnInit, Inject } from '@angular/core';
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

  constructor(
    private activityService: ActivityFetchService, 
    private router:Router, 
    public dialog: MatDialog) { }

  public activities;

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

  // ONLY FOR THE TEST PURPOSE
  // ================================================================================== //
  openUpdateDialog(activityEmail: string): void {
    
    // --------------------------------------------------------------------- //
    this.loadActivities();
    var tmp;

    // Loop via activities and find specific activity by email
    this.activities.forEach((activity) => {
      if (activity.email === activityEmail)
      {
        tmp = activity;
        console.log("From activities: " + activity.email);
      }
    });
    // --------------------------------------------------------------------- //
    
    //const dialogRef = this.dialog.open(ActivityFormComponent);
    
    
    const dialogRef = this.dialog.open(ActivityFormComponent, {
      data: {
        activity: tmp
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.loadActivities();
      
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
      this.loadActivities();

      console.log('The dialog was closed');
    });
  }

}


