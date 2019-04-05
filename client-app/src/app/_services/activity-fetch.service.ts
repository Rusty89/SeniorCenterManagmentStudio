import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Activity } from '../_models/activity';

// api url for members
//const API_URL:string = 'https://jln3dnryx2.execute-api.us-east-1.amazonaws.com/Dev/activity';

// New API
const API_URL:string = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/activity';

@Injectable()
export class ActivityFetchService {

  constructor(private http: HttpClient) {  }


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
          phone: activity["ad_phone"],
          id: activity['id'],
        });
      });
      return activityMap;
    });
  }
  
  deleteActivity(activityID: string)
  {
    return this.http.delete(API_URL,
      {
        params: {
          "id": activityID
        }
      });
  }

  saveActivity(activity: Activity)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, activity, options);
  }

}
