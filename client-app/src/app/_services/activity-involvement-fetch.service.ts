import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Activity } from '../_models/activity';
import { Involvement } from '../_models/involvement';

// OLD: api url for activity-involvement
//const API_URL:string = 'https://jln3dnryx2.execute-api.us-east-1.amazonaws.com/Dev/involvement';

// NEW: API for activity-involvement
const API_URL:string = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/activity-involvement';

// NEW: API for activity-involvement-update
const API_URL_UPDATE:string = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/activity-involvement-update';

@Injectable()
export class ActivityInvFetchService {

  constructor(private http: HttpClient) {  }

  getInvolvements()
  {
    return this.http.get(API_URL)
    .map((involvements: Array<String>)=>{
      let involvementMap:Involvement[] = [];
      involvements && involvements.forEach((involvement)=>{
        involvementMap.push({

          // It should be id of an activity
          activityID: involvement["aid_activity_id"],

          // Example of adding involvement
          /*
          {
            "activityID": "AUTO-GENERATED-BY-AWS-FOR-ACTIVITY",
            "memberEmails": ["email-0@AOL.com", "email-1@AOL.com", "email-2@AOL.com"]
          }
          */

          // Not sure how to work with string arrays here
          memberIDs: involvement["aid_m_ids"],


          id: involvement['id'],
        });
      });
      return involvementMap;
    });
  }

  saveInvolvement(involvement: Involvement)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, involvement, options);
  }

  updateInvolvement(involvement: Involvement)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL_UPDATE, involvement, options);
  }

  deleteInvolvement(activityID: string)
  {
    return this.http.delete(API_URL,
      {
        params: {
          "aid_activity_id": activityID
        }
      });
  }
}
