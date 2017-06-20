import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';



import { Job } from '../../models/job';

/*
  Generated class for the JobsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class JobsProvider {

  constructor(public http: Http, public storage: Storage){
  }

  load(): Observable<Job[]> {
    return Observable.fromPromise(this.storage.get("api_url")).mergeMap(url_setting => {
      return this.http.get(url_setting)
        .map(res => <Job[]>res.json());
    });
  }
}
