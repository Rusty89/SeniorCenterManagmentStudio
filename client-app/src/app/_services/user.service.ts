import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // gets all users from our API
    getAll() {
        return this.http.post<User[]>(`${environment.apiUrl}/users`, null);
    }

    // gets a single user object by passing in a username
    getByUsername(username: string) {
        return this.http.post(`${environment.apiUrl}/single-user`, username);
    }

    // add a user to database
    register(user: User) {

       let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
       let options = { headers: headers };
       return this.http.post(`${environment.apiUrl}/user/`, user, options);
    }

    // update user's information in database
    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
    }

    // remove a user from the database
    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}