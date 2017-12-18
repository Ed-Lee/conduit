import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import "rxjs/add/observable/throw";
import { JwtService } from './jwt.service';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient,
  private jwtService: JwtService) { }

  private setHeaders(): HttpHeaders {

    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    console.log('formatErrors(error) =>',error);
    return Observable.throw(error.error);
 }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`,
     JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors);
        //.do(console.log);
        //.map((res:Response) => res.json());
  }

  get(path: string, params: any = {}): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`,
    {
      headers: this.setHeaders(),
      params: params
    })
    .catch(this.formatErrors)
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http.put( `${environment.api_url}${path}`, JSON.stringify(body), { headers: this.setHeaders() })
    .catch(this.formatErrors);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`,
    {
      headers: this.setHeaders()
    })
    .catch(this.formatErrors);
  }



}
