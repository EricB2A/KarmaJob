import { Component } from '@angular/core';
import {NavParams, Platform} from 'ionic-angular';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})

export class ItemDetailsPage {

  selectedItem: any;

  constructor(public navParams: NavParams, private platform: Platform) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('details');
  }


}
