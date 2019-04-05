import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Volunteer } from '../_models/volunteer';

// api url for members
const API_URL:string = 'https://jln3dnryx2.execute-api.us-east-1.amazonaws.com/Dev/volunteer';

@Injectable()
export class VolunteerFetchService {

  constructor(private http: HttpClient) {  }


// return all volunteers from the database
getVolunteers()
  {
    return this.http.get(API_URL)
    .map((volunteers: Array<String>)=>{
      let volunteerMap:Volunteer[] = [];
      volunteers && volunteers.forEach((volunteer)=>{
        volunteerMap.push({
          firstName: volunteer['vi_f_name'],
          lastName: volunteer['vi_l_name'],
          address: volunteer['vi_address'],
          apt: volunteer['vi_apt'],
          city: volunteer['vi_city'],
          state: volunteer['vi_state'],
          zip: volunteer['vi_zip_code'],
          month: volunteer['vi_dob'],
          phone: volunteer['vi_phone'],
          email: volunteer['vi_email'],
          id: volunteer['Id'],
        });
      });
      return volunteerMap;
    });
  }

  // remove volunteer from the database
  deleteVolunteer(volunteerEmail: string)
  {
    return this.http.delete(API_URL,
      {
        params: {
          "email": volunteerEmail
        }
      });
  }

  // post volunteer to the database
  saveVolunteer(volunteer: Volunteer)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, volunteer, options);
  }

}
