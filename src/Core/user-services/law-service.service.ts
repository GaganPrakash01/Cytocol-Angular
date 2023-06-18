import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Law } from '../../Shared/Models/Law';

@Injectable({
  providedIn: 'root'
})
export class LawService {
  private apiUrl = 'https://localhost:44367/api/law';

  constructor(private http: HttpClient) { }

  getLaws(): Observable<Law[]> {
    return this.http.get<Law[]>(`${this.apiUrl}/all`);
  }
}
