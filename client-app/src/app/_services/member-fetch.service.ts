import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Member } from '../_models/member';

//Change the following URL with your own API Gateway URL.
const API_URL:string = 'https://jln3dnryx2.execute-api.us-east-1.amazonaws.com/Dev/member';

@Injectable()
export class MemberFetchService {

  constructor(private http: HttpClient) {  }


getMembers()
  {
    return this.http.get(API_URL)
    .map((members: Array<String>)=>{
      let memberMap:Member[] = [];
      members && members.forEach((member)=>{
        memberMap.push({
          firstName: member['mi_f_name'],
          lastName: member['mi_l_name'],
          address: member['mi_address'],
          apt: member['mi_apt'],
          city: member['mi_city'],
          state: member['mi_state'],
          zip: member['mi_zip_code'],
          month: member['mi_dob'],
          phone: member['mi_phone'],
          email: member['mi_email'],
          id: member['id'],
        });
      });
      return memberMap;
    });
  }

  deleteMember(memberEmail: string)
  {
    return this.http.delete(API_URL,
      {
        params: {
          "email": memberEmail
        }
      });
  }

  saveMember(member: Member)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, member, options);
  }

}
