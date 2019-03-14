import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) 
    {
        return this.http.post<any>(`${environment.apiUrl}/single-user`, { username, password })
            .pipe(map(user => {

                //console.log("\n===> [ " + JSON.stringify(user) + " ] <===\n");
                var tmp =  JSON.parse(JSON.stringify(user));
                //console.log("\n===> [ " + tmp.ma_token + " ] <===\n");
                //console.log("\n===> [ " + tmp.Id + " ] <===\n");

                // login successful if there's a jwt token in the response
                if (user && tmp.ma_token) 
                {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));

            /*
            search(term: string): Observable<SearchItem[]> {
                let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
                return this.http.get(apiURL).pipe(
                  map(res => {
                    return res.results.map(item => {
                      return new SearchItem(
                        item.trackName,
                        item.artistName,
                        item.trackViewUrl,
                        item.artworkUrl30,
                        item.artistId
                      );
                    });
                  })
                );
                */


        /*
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
        */
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}