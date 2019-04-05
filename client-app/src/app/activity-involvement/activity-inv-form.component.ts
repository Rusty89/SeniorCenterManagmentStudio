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

    // Getting all involvements from blinded data
    this.involvements = this.data.involvements;

    // Find specific involvement by its unique name
    this.findInvolvement(); 

    //this.loadInvolvements();
  }

  // Is not working how it should, so I have to send all involvements from the ServicesComponent
  // ---------------------------------------------------------------------------------------- //
  private loadInvolvements() {
    this.activityInvService.getInvolvements().subscribe(
      data => { this.involvements = data },
      err => console.error(err),
      () => console.log("involvements loaded.")
    );
  }
  // ---------------------------------------------------------------------------------------- //

  // Find specific Involvement
  private findInvolvement() 
  {
    this.involvements.forEach((inv) => {
      if (this.data.activity.email === inv.uniqueName) {
        this.involvement = inv;
      }
    });

    /*
    this.involvements.forEach((value: Int16Array, key: Involvement) => {
      if (this.data.activity.email === key.uniqueName) {
        this.involvement = key;
      }
    });
    */
  }

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
