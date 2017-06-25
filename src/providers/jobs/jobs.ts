import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Job } from '../../models/job';

@Injectable()
export class JobsProvider {

  constructor(public http: Http, public storage: Storage){
  }

  /**
   * Get the jobs from the given api.
   * And returns it in an observable made of models.
   * @returns {Observable<Job>}
   */
  load(): Observable<Job[]> {
    return Observable.fromPromise(this.storage.get("api_url")).mergeMap(url_setting => {
      return this.http.get(url_setting)
        .map(res => {
          return <Job[]>res.json();
        });
    });
  }
}
