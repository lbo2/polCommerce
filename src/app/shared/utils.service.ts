import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  callGET(url:string) {
    return this.http.get(url).toPromise();
  }

  callPOST(url:string, params:any, headersIn:any) {
    const headers =  {
      headers: new  HttpHeaders(headersIn)
    };
    return this.http.post(url,params,
    headers).toPromise();
  }
}
