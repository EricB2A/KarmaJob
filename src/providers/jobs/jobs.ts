import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Job } from '../../models/job';

/*
  Generated class for the JobsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JobsProvider {
  apiUrl = "http://karmajobs.servehttp.com/api";
  constructor(public http: Http) {
    console.log('Hello JobsProvider Provider');
  }

  load(): Observable<Job[]> {
    return this.http.get(this.apiUrl + "/jobs")
      .map(res => <Job[]>res.json());
  }

}
