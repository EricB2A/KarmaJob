import {Component} from '@angular/core';
import {Platform, AlertController, ToastController} from 'ionic-angular';
import { Network } from '@ionic-native/network';

declare let navigator: any;
declare let Connection: any;


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(private toast: ToastController, private platform: Platform, public alertCtrl: AlertController, private network: Network) { }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    console.log("create a new toast now...")
    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }


  ionViewDidEnter() {
    console.log("welcommen");
    this.network.onConnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type)
    }, error => console.error(error));

    this.network.onDisconnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }
}
