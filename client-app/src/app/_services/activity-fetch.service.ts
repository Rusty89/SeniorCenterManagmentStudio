import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Activity } from '../_models/activity';

// api url for members
const API_URL:string = 'https://jln3dnryx2.execute-api.us-east-1.amazonaws.com/Dev/activity';

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
          className: activity["ai_class_name"],
          time: activity["ai_time"],
          days: activity["ai_days"],
          city: activity["ai_city"],
          state: activity["ai_state"],
          zip: activity["ai_zip"],
          phone: activity["ai_phone"],
          email: activity["ai_email"],
          id: activity['Id'],
        });
      });
      return activityMap;
    });
  }
  
  deleteActivity(activityEmail: string)
  {
    return this.http.delete(API_URL,
      {
        params: {
          "email": activityEmail
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
