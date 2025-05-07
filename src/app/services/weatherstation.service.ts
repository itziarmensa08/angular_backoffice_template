import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Observable } from 'rxjs';
import { Weatherstation } from '../interfaces/weatherstation';

@Injectable({
  providedIn: 'root',
})
export class WeatherstationService {
  private base = '/weatherstation';

  constructor(private api: CommunicationService) {}

  getAll(page: number, limit: number): Observable<Weatherstation[]> {
    return this.api.post<Weatherstation[]>(`${this.base}s`, { page, limit });
  }

  getById(id: string): Observable<Weatherstation> {
    return this.api.get<Weatherstation>(`${this.base}/${id}`);
  }

  create(data: Weatherstation): Observable<Weatherstation> {
    return this.api.post<Weatherstation>(`${this.base}`, data);
  }

  update(id: string, data: Weatherstation): Observable<Weatherstation> {
    return this.api.put<Weatherstation>(`${this.base}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.api.delete<any>(`${this.base}/${id}`);
  }

  aggregate(pipeline: any[]): Observable<Weatherstation[]> {
    return this.api.post<Weatherstation[]>(`${this.base}/aggregation`, pipeline);
  }

  getConfig(): Observable<any> {
    return this.api.get<any>(`${this.base}/model/config`);
  }
}
