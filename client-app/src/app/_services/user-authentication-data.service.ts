import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '@environments/environment';
import { User } from '../_models/user';


//Change the following URL with your own API Gateway URL.
const API_URL_AUTHENTICATION:string = 'https://70jjjl5m82.execute-api.us-east-1.amazonaws.com/Dev2/authenticationapi';

@Injectable({ providedIn: 'root' })
export class UserAuthenticationDataService {

  constructor(private http: HttpClient) {  }

  // TEST
  // =================================================================== //
  getPasswords()
  {
    //console.log("***[ 0: LOOP ]***");
    return this.http.get(API_URL_AUTHENTICATION)
    .map((users: Array<String>)=>{
      let userMap:User[] = [];
      users && users.forEach((user)=>{
        userMap.push({
          username: user['ma_username'],
          password: user['ma_password'],
          firstName: user['ma_fname'],
          lastName: user['ma_lname'],
          token: user['ma_token'],
          id: user['id'],
        });
        //console.log("***[ 1: LOOP ]***");
      });
      //console.log("***TEST***" + userMap);
      return userMap;
    });
  }
  // =================================================================== //


    /*
    constructor(private memberService: MemberFetchService) { }

    public userMap;

    public load() {
        this.loadPasswords();
    }

    private loadPasswords() 
    {
        console.log("loadPassword()");
        this.memberService.getPasswords().subscribe(
          data => { this.userMap = data },
          err => console.error("passwords IS NOT loaded: " + err),
          () => console.log("passwords loaded.")
        );
    }
    */

 }