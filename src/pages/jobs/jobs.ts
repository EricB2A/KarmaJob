import {Component, Pipe, Injectable, PipeTransform} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

import { JobsProvider } from '../../providers/jobs/jobs'
import { Job } from "../../models/job";
import { ItemDetailsPage } from "../item-details/item-details";

@Pipe({
  name: 'objectValues'
})

@Injectable()
export class ObjectValuesPipe implements PipeTransform {
  /**
   * Transform object to array
   * @param obj
   * @returns array
   */
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

  constructor(public navCtrl: NavController, private jobsProv: JobsProvider, private alertCtrl: AlertController) {
    jobsProv.load().subscribe(jobs => {
      console.log(jobs);
      this.jobs = jobs
    }, (err) => {
      console.log(err);
      // if we cannot load the jobs, show error
      let alert = this.alertCtrl.create({
        title: "Error while getting jobs",
        subTitle: "Please check the settings API URL or your connection.",
        buttons: ["OK"]
      });
      alert.present();
    });
  }

  /**
   * Go to the details of the selected job
   * @param details
   */
  goToDetails(details: object) {
    this.navCtrl.push(ItemDetailsPage, {details});
  }

  ionViewDidLoad() {
    console.log('Hello Jobs Page');
  }
}
