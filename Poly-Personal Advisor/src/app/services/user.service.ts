import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private repository: RepositoryService) { }

  authentication(email:string): Observable<User[]>{
    return this.repository.userData(email);
  }
}
