import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { JobsProvider } from "../../providers/jobs/jobs";

import { Job } from "../../models/job";
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  jobs: Job[];

  constructor(public geo: Geolocation,  private jobsProv: JobsProvider, private platform: Platform) {
  }

  transform(obj: any) {
    if(obj==null){return null;}
    let arr = Object.keys(obj).map(function (key) { return obj[key]; });
    return arr[0];
  }

  ionViewDidLoad() {
   this.loadMap();
  }

  loadMap() {
    this.platform.ready().then(() => {
      //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.getMarkers();

      this.geo.getCurrentPosition({timeout: 10000 , enableHighAccuracy: false, maximumAge: 0 })
        .then((position) => {
          this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

        }, (err) => {
          console.log(err);
          this.geo.watchPosition({timeout: 3000, enableHighAccuracy: true}).subscribe((position)=>{
            this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            console.log("pos");
            console.log(position);
          })
        });
    });

  }

  getMarkers() {
    this.jobsProv.load().subscribe(jobs => {
      this.jobs = jobs;
      for(let job of this.transform(jobs)){
        this.addMarkerToMap(job);
        console.log(job);
      }
    }, (err) => {
      console.log(err);
    });
  }

  addMarkerToMap(job) {
    let position = new google.maps.LatLng(job['geo_location']['lat'], job['geo_location']['lng']);
    let marker = new google.maps.Marker({position: position, title: job.title});
    let info = new google.maps.InfoWindow({
      content: job.title
    });

    marker.addListener('click', () => {
      info.open(this.map, marker);
    });

    marker.setMap(this.map);
  }


  // addMarker(){
  //   let marker = new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: this.map.getCenter()
  //   });
  //
  //   let content = "<h4>Information!</h4>";
  //   this.addInfoWindow(marker, content);
  // }
  //
  // addInfoWindow(marker, content){
  //   let infoWindow = new google.maps.InfoWindow({
  //     content: content
  //   });
  //
  //   google.maps.event.addListener(marker, 'click', () => {
  //     infoWindow.open(this.map, marker);
  //   });
  // }


}
