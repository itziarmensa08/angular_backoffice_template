import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private base = '/user';

  constructor(private api: CommunicationService) {}

  getAll(page: number, limit: number): Observable<User[]> {
    return this.api.post<User[]>(`${this.base}s`, { page, limit });
  }

  getById(id: string): Observable<User> {
    return this.api.get<User>(`${this.base}/${id}`);
  }

  create(data: User): Observable<User> {
    return this.api.post<User>(`${this.base}`, data);
  }

  update(id: string, data: User): Observable<User> {
    return this.api.put<User>(`${this.base}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.api.delete<any>(`${this.base}/${id}`);
  }

  aggregate(pipeline: any[]): Observable<User[]> {
    return this.api.post<User[]>(`${this.base}/aggregation`, pipeline);
  }
}