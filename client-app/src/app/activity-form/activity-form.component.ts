
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Activity } from '../_models/activity';
import { ActivityFetchService } from '../_services/activity-fetch.service';





@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {

  constructor(

    private activityService: ActivityFetchService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  activity: Activity;

  ngOnInit() {
    this.activity = new Activity();
  }

  saveActivity() {

    this.activityService.saveActivity(this.activity).toPromise().then(() => {
      //this.router.navigate['services']
      window.location.reload();

    });
  }

  updateActivity(activityEmail: string)
  {
    // Delete activity by email

    this.аctivityService.deleteActivity(this.data.activity.email);

    // Add new activity
    this.activityService.saveActivity(this.data.activity).toPromise().then(() => {
      //this.router.navigate['services']
      window.location.reload();

    });
  }


}
