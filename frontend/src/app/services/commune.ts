// src/app/services/commune.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commune } from '../models/commune';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  private http = inject(HttpClient);

  constructor() {}

  // Get all communes
  getCommunes(): Observable<Commune[]> {
    return this.http.get<Commune[]>(environment.apiUrl);
  }

  // Check if a postcode exists (used for Melun check)
  checkPostcode(postcode: string): Observable<{ exists: boolean }> {
    return this.http.get<{ exists: boolean }>(`${environment.apiUrl}${postcode}/`);
  }
}

