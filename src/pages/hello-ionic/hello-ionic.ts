import { Component } from '@angular/core';
import {AlertController, NavController, Platform} from 'ionic-angular';
import { Network } from '@ionic-native/network';

declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {

  constructor(private platform: Platform, private network: Network, private navCtrl: NavController, private alert: AlertController) { }

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
      let alert = this.alert.create({
        title: "Connection Status",
        subTitle: states[networkState],
        buttons: ["OK"]
      });
      alert.present();
    });
  }


  // connected: Subscription;
  // disconnected: Subscription;
  //
  // displayNetworkUpdate(connectionState: string) {
  //   console.log("krkr")
  //   let networkType = this.network.type;
  //   this.toast.create({
  //     message: `You are now ${connectionState} via ${networkType}`,
  //     duration: 3000
  //   }).present();
  // }
  //
  // ionViewDidEnter() {
  //   console.log("enter");
  //   this.connected = this.network.onConnect().subscribe(data => {

  //     console.log(data);
  //     this.displayNetworkUpdate(data.type);
  //   }, error => console.error(error));
  //
  //   this.disconnected = this.network.onDisconnect().subscribe(data => {

  //     console.log(data);
  //     this.displayNetworkUpdate(data.type);
  //   }, error => console.error(error));
  // }
  //
  // ionViewWillLeave(){
  //   console.log("leave");
  //   this.connected.unsubscribe();
  //   this.disconnected.unsubscribe();
  // }

}
