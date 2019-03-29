
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Activity } from '../_models/activity';
import { ActivityFetchService } from '../_services/activity-fetch.service';

import { ServicesComponent } from '../services/services.component';



@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {

  constructor(
    private аctivityService: ActivityFetchService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  activity: Activity;

  ngOnInit() {
    this.activity = new Activity();
  }

  saveActivity() {
    this.аctivityService.saveActivity(this.activity).toPromise().then(() => {
      //this.router.navigate['services']
      this.router.navigate([ServicesComponent]);
    });
  }

  updateActivity(activityEmail: string)
  {
    // Delete activity by email
    this.аctivityService.deleteActivity(this.data.activity.email);

    // Add new activity
    this.аctivityService.saveActivity(this.data.activity).toPromise().then(() => {
      //this.router.navigate['services']
      this.router.navigate([ServicesComponent]);
    });
  }


}
