import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public storage: Storage) {
    storage.ready().then(() => {
      this.storage.set('api_url', "127.0.0.1")
    });
  }
}
