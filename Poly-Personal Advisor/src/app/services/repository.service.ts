import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private userDB = '/PolyPersonalAdvisor/user';
  private userQuery = 'email';

  constructor(private repository: AngularFireDatabase) { }

  userData(email: string): Observable<User[]>{
    return this.repository.list<User>(this.userDB, ref => ref.orderByChild(this.userQuery).equalTo(email)).valueChanges();
  }
}
