import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Activity } from '../_models/activity';
import { Involvement } from '../_models/involvement';

// api url for members
const API_URL:string = 'https://jln3dnryx2.execute-api.us-east-1.amazonaws.com/Dev/involvement';

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
          uniqueName: involvement["ain_uname"],

          // Example of adding involvement
          /*
          {
            "uniqueName": "TEST",
            "memberEmails": ["email-0@AOL.com", "email-1@AOL.com", "email-2@AOL.com"]
          }
          */

          // Not sure how to work with string arrays here
          memberEmails: involvement["ain_m_emails"],


          id: involvement['Id'],
        });
      });
      return involvementMap;
    });
  }

  deleteInvolvement(uniqueName: string)
  {
    return this.http.delete(API_URL,
      {
        params: {
          "uname": uniqueName
        }
      });
  }

  saveInvolvement(involvement: Involvement)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, involvement, options);
  }

}
