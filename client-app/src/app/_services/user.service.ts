import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        //return this.http.get<User[]>(`${environment.apiUrl}/users`);

        return this.http.post<User[]>(`${environment.apiUrl}/users`, null);
    }

    /*
    getById(username: string) {
        //return this.http.get(`${environment.apiUrl}/users/${id}`);

        // Get by username  /single-user
        return this.http.post(`${environment.apiUrl}/single-user`, username);
    }
    */

    
    getByUsername(username: string) {
        //return this.http.get(`${environment.apiUrl}/users/${id}`);

        // Get by username  /single-user
        return this.http.post(`${environment.apiUrl}/single-user`, username);
    }
    

    /*
    getById(id: number) {
        //return this.http.get(`${environment.apiUrl}/users/${id}`);

        // Get by username  /single-user
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }
    */

    register(user: User) {
        //return this.http.post(`${environment.apiUrl}/users/register`, user);

        /*
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this.http.post(API_URL, member, options);
        */

       let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
       let options = { headers: headers };
       return this.http.post(`${environment.apiUrl}/user/`, user, options);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}