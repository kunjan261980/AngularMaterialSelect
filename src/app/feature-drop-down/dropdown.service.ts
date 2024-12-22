import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any[]>
  {
    return this.httpClient.get<any[]>('assets/data/DataFromAssets.json')
  }
}
