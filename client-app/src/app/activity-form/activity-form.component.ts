import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';
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
      window.location.reload();
    });
  }

  updateActivity(activity: Activity)
  {
    this.activityService.updateActivity(activity).toPromise().then(() => {
      window.location.reload();
    });
  }
  
	validateForm(){
		  var fail=true;
		  if(this.activity.className==null || this.activity.className	==""){
			  window.alert("Required field name");
			  fail=false;
		  }
		  else if(this.activity.time==null || this.activity.time==""){
			   window.alert("Required field time");
			  fail=false;
		  }
		  else if(this.activity.days==null || this.activity.days==""){
			  window.alert("Required field day");
			  fail=false;
		  }
		  else if(this.activity.location==null || this.activity.location==""){
			   window.alert("Required field location");
			  fail=false;
		  }		    
		 
		  if(fail){
			  this.saveActivity();
		  
			return true;
		  }else{
			  return false;
		  }
	  
    }
}
