import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Law } from 'src/Shared/Models/Law';
import { Lawyer } from 'src/Shared/Models/Lawyer';

@Injectable({
  providedIn: 'root'
})
export class LawyerService{
  private apiUrl = 'https://localhost:44367/api/lawyer';

  constructor(private http: HttpClient) { }

  getLawyers(): Observable<Lawyer[]> {
    return this.http.get<Lawyer[]>(`${this.apiUrl}`);
  }
}
