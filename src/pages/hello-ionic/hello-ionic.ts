import {Component} from '@angular/core';
import {NavController, Platform, AlertController} from 'ionic-angular';

declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(private navCtrl: NavController, private platform: Platform, public alertCtrl: AlertController) { }

  checkNetwork() {
    this.platform.ready().then(() => {
      var networkState = navigator.connection.type;
      var states = {};
      states[Connection.UNKNOWN]  = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI]     = 'WiFi connection';
      states[Connection.CELL_2G]  = 'Cell 2G connection';
      states[Connection.CELL_3G]  = 'Cell 3G connection';
      states[Connection.CELL_4G]  = 'Cell 4G connection';
      states[Connection.CELL]     = 'Cell generic connection';
      states[Connection.NONE]     = 'No network connection';
      let alert = this.alertCtrl.create({
        title: "Connection Status",
        subTitle: states[networkState],
        buttons: ["OK"]
      });
      alert.present(alert);
    });
  }


}
