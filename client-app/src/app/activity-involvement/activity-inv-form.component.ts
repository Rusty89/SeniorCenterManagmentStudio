import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ActivityFetchService } from '../_services/activity-fetch.service';
import { ActivityInvFetchService } from '../_services/activity-involvement-fetch.service';

import { Activity } from '../_models/activity';
import { Involvement } from '../_models/involvement';


@Component({
  selector: 'app-activity-inv-form',
  templateUrl: './activity-inv-form.component.html',
  styleUrls: ['./activity-inv-form.component.css']
})
export class ActivityInvFormComponent {

  constructor(
    private activityService: ActivityFetchService,
    private activityInvService: ActivityInvFetchService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  public involvements;
  public involvement;

  ngOnInit() {

    // Getting all involvements from attached data
    //this.involvements = this.data.involvements;
    this.involvement = this.data.involvement;

  }

  updateInvolvement(involvement: Involvement)
  {
    this.activityInvService.updateInvolvement(involvement).toPromise().then(() => {
      window.location.reload();
    });
  }
}
