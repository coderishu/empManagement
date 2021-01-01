import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MainService {
  constructor(private httpClient: HttpClient) {}

  createPostRequest(url: any, data: any): Observable<any> {
    let headers = new Headers({ "Content-Type": "application/json" });
    return this.httpClient.post(url, data, { responseType: "json" });
  }
  getRequest(url): Observable<any> {
    return this.httpClient.get(url);
  }
}
