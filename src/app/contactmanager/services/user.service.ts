import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { BehaviorSubject, Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  }
  constructor(private http: HttpClient) {
    this.dataStore = {users: []};
    this._users = new BehaviorSubject<User[]>([]);
   }

   get users(): Observable<User[]> {
     return this._users.asObservable();
   }

   loadAll() {
     const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

     return this.http.get<User[]>(usersUrl)
     .subscribe( data =>{
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users);
     },error =>{
       console.log("failed to fetch users");
     })
   }
}
