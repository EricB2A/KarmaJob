import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import {FormBuilder, Validators} from "@angular/forms";

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settings = {url:""};
  urlForm = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController, public http: Http, private formBuilder: FormBuilder) {
    this.storage.get('api_url')
      .then(data => {
        this.settings.url = data;
      });

  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad SettingsPage');
  }

  settingForm(){
    console.log(this.settings);
    this.http.get(this.settings.url)
      .subscribe(
        data => {
          this.storage.set('api_url', this.settings.url);
          console.log("Worked so far !");
        },
        err => {
          let alert = this.alertCtrl.create({
              title: 'API URL NOT VALID!',
              subTitle: 'The given url is not a valid api. Do you want to use the default api value ?',
              buttons:[
                {
                  text: 'Use KarmaJob API',
                  handler : () => {
                    this.storage.set('api_url', 'http://karmajobs.servehttp.com/api/jobs');
                  }
                },
                {text: 'No thanks'}
              ]

            });
            alert.present();
        }
      );

  }

}
