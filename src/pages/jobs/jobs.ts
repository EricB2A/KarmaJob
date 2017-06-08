import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JobsProvider } from '../../providers/jobs/jobs'

/**
 * Generated class for the JobsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private jobs: JobsProvider) {
    jobs.load().subscribe(jobs => {
      console.log(jobs)
    });
  }

  ionViewDidLoad() {
    console.log('Hello Jobs Page');
  }

}
