import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Activity } from '../_models/activity';

// OLD: api url for activities
//const API_URL:string = 'https://jln3dnryx2.execute-api.us-east-1.amazonaws.com/Dev/activity';

// NEW: API for activities
const API_URL:string = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/activity';

// NEW: API only for updating single activity
const API_URL_UPDATE = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/activity-update';

@Injectable()
export class ActivityFetchService {

  constructor(private http: HttpClient) {  }

  // Getting all activities
  getActivities()
  {
    return this.http.get(API_URL)
    .map((activities: Array<String>)=>{
      let activityMap:Activity[] = [];
      activities && activities.forEach((activity)=>{
        activityMap.push({
          className: activity["ad_class_name"],
          time: activity["ad_time"],
          days: activity["ad_days"],
          location: activity["ad_location"],
          id: activity['id'],
        });
      });
      return activityMap;
    });
  }
  
  // Saving activity
  saveActivity(activity: Activity)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, activity, options);
  }

  // Deleting activity
  deleteActivity(activityID: string)
  {
    return this.http.delete(API_URL,
      {
        params: {
          "id": activityID
        }
      });
  }

  // Updating activity, we are using new API design special for update purpose
  updateActivity(activity: Activity)
  {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let options = { headers: headers };
      return this.http.post(API_URL_UPDATE, activity, options);
  }

}
