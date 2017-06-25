import { Component } from '@angular/core';
import { AlertController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  settings = {url:""};
  urlForm = {};

  constructor(public storage: Storage, public alertCtrl: AlertController, public http: Http) {
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
    // try to query the given api
    this.http.get(this.settings.url)
      .subscribe(
        data => {
          // store the value
          this.storage.set('api_url', this.settings.url);
          console.log("Worked so far !");
        },
        err => {
          // if we can't get a value on the given api, throw a message error
          let alert = this.alertCtrl.create({
              title: 'API URL NOT VALID!',
              subTitle: 'The given url is not a valid api. Do you want to use the default api value ?',
              buttons:[
                {
                  text: 'Use KarmaJob API',
                  handler : () => {
                    // if the user decide to use the KarmaJob API
                    // store the value and set the input value
                    let karmaJobApiUrl = 'http://karmajobs.servehttp.com/api/jobs';
                    this.storage.set('api_url', karmaJobApiUrl);
                    this.settings.url = karmaJobApiUrl;
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
