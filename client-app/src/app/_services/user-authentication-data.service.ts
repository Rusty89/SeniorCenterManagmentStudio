import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../_models/user';


const API_URL_AUTHENTICATION:string = 'https://70jjjl5m82.execute-api.us-east-1.amazonaws.com/Dev2/authenticationapi';

@Injectable({ providedIn: 'root' })
export class UserAuthenticationDataService {

  constructor(private http: HttpClient) {  }

  // returns all users from database
  getPasswords()
  {
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
      });
      return userMap;
    });
  }
 }