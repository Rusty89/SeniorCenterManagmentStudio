import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Volunteer } from '../_models/volunteer';

// OLD: api url for volunteer
//const API_URL:string = 'https://jln3dnryx2.execute-api.us-east-1.amazonaws.com/Dev/volunteer';

// NEW: api for volunteer
const API_URL: string = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/volunteer';

// NEW: API only for updating single volunteer
const API_URL_UPDATE: string = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/volunteer-update';

@Injectable()
export class VolunteerFetchService {

  constructor(private http: HttpClient) { }


  // return all volunteers from the database
  getVolunteers() {
    return this.http.get(API_URL)
      .map((volunteers: Array<String>) => {
        let volunteerMap: Volunteer[] = [];
        volunteers && volunteers.forEach((volunteer) => {
          volunteerMap.push({
            firstName: volunteer['vd_f_name'],
            lastName: volunteer['vd_l_name'],
            address: volunteer['vd_address'],
            apt: volunteer['vd_apt'],
            city: volunteer['vd_city'],
            state: volunteer['vd_state'],
            zip: volunteer['vd_zip_code'],
            dob: volunteer['vd_dob'],
            phone: volunteer['vd_phone'],
            email: volunteer['vd_email'],
            id: volunteer['id'],
          });
        });
        return volunteerMap;
      });
  }

  // post volunteer to the database
  saveVolunteer(volunteer: Volunteer) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, volunteer, options);
  }

  // remove volunteer from the database
  deleteVolunteer(volunteerID: string) {
    return this.http.delete(API_URL,
      {
        params: {
          "id": volunteerID
        }
      });
  }

  // update volunteer
  updateVolunteer(volunteer: Volunteer) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL_UPDATE, volunteer, options);
  }
}
