import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Activity } from '../_models/activity';
import { ActivityFetchService } from '../_services/activity-fetch.service';

import { Involvement } from '../_models/involvement';
import { ActivityInvFetchService } from '../_services/activity-involvement-fetch.service';


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
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public involvements;
  public involvement;

  ngOnInit() {
    this.loaInvolvements();
    //this.loadInvolvement();
  }

  private loaInvolvements() 
  {
    this.activityInvService.getInvolvements().subscribe(
      data => { this.involvements = data },
      err => console.error(err),
      () => console.log("involvements loaded.")
    );
  }

  /*
  private loadInvolvement()
  {
    this.involvements.forEach((inv) => {
      if (this.data.activity.email === inv.uniqueName) {
        this.involvement = inv;
        console.log("*** involvement loaded ***.");
      }
    });
  }
  */

  /*
  saveInvolvement() {
    this.activityInvService.saveInvolvement(this.involvement).toPromise().then(() => {
      window.location.reload();
    });
  }

  deleteInvolvement(uniqueName: string) {
    this.activityInvService.deleteInvolvement(uniqueName).subscribe(() => {
      this.loaInvolvements();
    });
  }
  */
}
