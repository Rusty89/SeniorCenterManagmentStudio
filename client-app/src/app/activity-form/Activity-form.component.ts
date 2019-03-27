import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../_models/activity';
import { ActivityFetchService } from '../_services/activity-fetch.service';

import { ServicesComponent } from '../services/services.component';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {

  constructor(private аctivityService: ActivityFetchService, private router: Router) { }

  // ONLY FOR THE TEST PURPOSE
  // ================================================================================== //
  public tmp = ServicesComponent.getActivity();
  // ================================================================================== //

  activity: Activity;

  ngOnInit() {
    this.activity = new Activity();
  }

  saveActivity() {
    this.аctivityService.saveActivity(this.activity).toPromise().then(() => {this.router.navigate['services']});
  }

}
