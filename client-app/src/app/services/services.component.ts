import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog} from '@angular/material';

import { ActivityFormComponent } from '.././activity-form/activity-form.component';
import { ActivityFetchService } from '../_services/activity-fetch.service';

import { ActivityInvFormComponent } from '.././activity-involvement/activity-inv-form.component';
import { ActivityInvFetchService } from '../_services/activity-involvement-fetch.service';

import { Involvement } from '../_models/involvement';


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

  }

  deleteActivity(activity: any) {
	if(confirm("Are you sure you want to delete "+activity.className)) {
		
		this.activityInvService.deleteInvolvement(activity.id).subscribe(() => {
		  
		});
		this.activityService.deleteActivity(activity.id).subscribe(() => {
		  this.loadActivities();
		});
    }
    
  }

  // Send data into update dialog
  // ================================================================================== //
  openUpdateDialog(activityID: string): void {

    // Get all activities and find one activity by email
    // --------------------------------------------------------------------- //
    this.loadActivities();
    var tmpActivity;
    var tmpInvolvement;

    // Loop via activities and find specific activity by email
    this.activities.forEach((activity) => {
      if (activity.id === activityID) {
        tmpActivity = activity;
      }
    });
    // --------------------------------------------------------------------- //

    // Open update dialog and sent data into update dialog
    const dialogRef = this.dialog.open(ActivityFormComponent, {
      data: {
        activity: tmpActivity,
        involvement: tmpInvolvement
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

    const dialogRef = this.dialog.open(ActivityFormComponent);
    var test;

    dialogRef.afterClosed().subscribe(result => {
      this.loadActivities();

      console.log('The dialog was closed');
    });

    // Loop via involvements and find specific involvements by activityID
    for(var i = 0; i < this.activities.length; i++){
      if (i === this.involvements.length) 
      {
          test = this.activities[i].id
          console.log(this.activities[i].id);

      }
    };
  }

  // opens modal to add involvement
  manageMember(activityID: string): void 
  {

    console.log(activityID + "test test test")
    // Create new involvement for this activity
    // --------------------------------------------------------------------- //
    // But before we have to check if we have an involvement for this activity
    
    // Get all activities and find one activity by ID

    this.loadInvolvements();
    var hasInv: boolean;
    hasInv = false;

    // Loop via involvements and find specific involvements by activityID
    for(var i = 0; i < this.involvements.length; i++){
      if (this.involvements[i].activityID === activityID) 
      {
        //stop loop and load existing involvement
        hasInv = true;            
        break;
      }
    };

    //else create new involvement
    if (hasInv === false) {
      this.addInvolvement(activityID);
	  
    }

    // Get all activities and find one activity by ID
    // --------------------------------------------------------------------- //
    this.loadActivities();
    var tmpActivity;

    // Loop via activities and find specific activity by email
    this.activities.forEach((activity) => {
      if (activity.id === activityID) {
        tmpActivity = activity;
		
      }
    });
    // --------------------------------------------------------------------- //


    // Get all activities and find one activity by ID
    // --------------------------------------------------------------------- //
    this.loadInvolvements();
    var tmpInvolvement;

    // Loop via involvements and find specific involvements by activityID
    this.involvements.forEach((involvement) => {
      if (involvement.activityID === activityID) {
        tmpInvolvement = involvement;
		
      }
    });
    // --------------------------------------------------------------------- //

    // Open update dialog and sent data into update dialog
    const dialogRef = this.dialog.open(ActivityInvFormComponent, {
      data: {
        activity: tmpActivity,
        involvement: tmpInvolvement
      }
    });

  
    dialogRef.afterClosed().subscribe(result => {
	  var tmpinvolvement = new Involvement();
      tmpinvolvement.activityID = activityID;
      tmpinvolvement.memberIDs = dialogRef.componentInstance.involvement.memberIDs;
	  this.activityInvService.updateInvolvement(tmpinvolvement).toPromise().then(() => {
		window.location.reload();
	  });
      console.log('Update dialog was closed');
    });
  }

  private addInvolvement(activityID: string)
  {

    var tmpinvolvement = new Involvement();
    tmpinvolvement.activityID = activityID;
    tmpinvolvement.memberIDs = ["Instructor"];

    this.activityInvService.saveInvolvement(tmpinvolvement).toPromise().then(() => {
      window.location.reload();
    });
  }
}


