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

   // Saving activity
  saveActivity() {
    this.activityService.saveActivity(this.activity).toPromise().then(() => {
      window.location.reload();
    });
  }

  // Updating activity
  updateActivity(activity: Activity)
  {
    this.activityService.updateActivity(activity).toPromise().then(() => {
      window.location.reload();
    });
  }

  // OLD PART OF CODE, I WOULD KEEP IT FOR NOW
  // ------------------------------------------------------------------------------------------ //
  /*
  updateActivity(activityID: string)
  {
    // Delete activity by email
    //this.activityService.deleteActivity(this.data.activity.email);
    this.deleteActivity(activityID);

    // Add new activity
    this.activityService.saveActivity(this.data.activity).toPromise().then(() => {
      //this.router.navigate['services']
      window.location.reload();
    });
  }

  private deleteActivity(activityID: string) {
    this.activityService.deleteActivity(activityID).subscribe(() => { });
  }
  */
 // ------------------------------------------------------------------------------------------ //
}
