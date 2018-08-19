import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Url, FullStats } from './models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpReqService {

  GetAllApiUrl = "http://localhost:8080/url/function/get";
  AddNewApiUrl = "http://localhost:8080/url/function/add";
  GetClickStatApiUrl = "http://localhost:8080/url/function/getClickFullStats/";//+id of url

  constructor(private http: HttpClient) {
  }

  getUrls(): Observable<Url[]> {
    return this.http.get<Url[]>(this.GetAllApiUrl);
  }

  addnewUrl(longUrl): Observable<Url> {
    return this.http.post<Url>(this.AddNewApiUrl, longUrl, httpOptions);
  }

  getClickStats(id): Observable<FullStats> {
    return this.http.get<FullStats>(this.GetClickStatApiUrl+id);
  }

}
