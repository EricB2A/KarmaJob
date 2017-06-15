import {Component, Pipe, Injectable, PipeTransform} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JobsProvider } from '../../providers/jobs/jobs'
import {Job} from "../../models/job";

/**
 * Generated class for the JobsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Pipe({
  name: 'objectValues'
})

@Injectable()
export class ObjectValuesPipe implements PipeTransform {
  transform(obj: any) {
    if(obj==null){return null;}
    let arr = Object.keys(obj).map(function (key) { return obj[key]; });
    return arr[0];
  }
}


@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {
  jobs: Job[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private jobsProv: JobsProvider) {
    jobsProv.load().subscribe(jobs => {
      this.jobs = jobs;
      console.log("my jobs");
      console.log(this.jobs);
    });
  }

  ionViewDidLoad() {
    console.log('Hello Jobs Page');
  }



}
