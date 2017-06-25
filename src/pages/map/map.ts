import { Component, ElementRef, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { JobsProvider } from "../../providers/jobs/jobs";
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng , GoogleMapsMarker, GoogleMapsMarkerOptions } from 'ionic-native';

import { Job } from "../../models/job";

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  jobs: Job[];
  map: GoogleMap;

  constructor(public geo: Geolocation,  private jobsProv: JobsProvider, private platform: Platform) { }

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

  ionViewDidLoad() {
   this.loadMap();
  }

  loadMap(){
    this.platform.ready()
      .then(() => {
        // The Cordova 'geolocation' plugin doesn't always work
        // so we use hardcoded values and override it if we have a response from the plugin
        let location = new GoogleMapsLatLng(46.8216845, 6.50598);

        this.geo.getCurrentPosition({timeout: 3000 , enableHighAccuracy: false, maximumAge: 0 })
          .then((position) => {
            this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
          }, (err) => {
            console.log(err);
          });

        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 0,
            'zoom': 15,
            'bearing': 0
          }
        });

        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          console.log('Map is ready!');
          // add the jobs markers
          this.getMarkers();
        });


      });
  }

  /**
   * Get the jobs marker from the jobs provider (available jobs)
   */
  getMarkers() {
    this.jobsProv.load().subscribe(jobs => {
      this.jobs = jobs;
      for(let job of this.transform(jobs)){
        this.addMarkerToMap(job);
      }
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * Add the selected to to the map with its geolocation and title
   * An improvement could be to open the jobs details when a marker is clicked
   * @param job
   */
  addMarkerToMap(job) {
    let markerOptions: GoogleMapsMarkerOptions = {
      position: new GoogleMapsLatLng(job['geo_location']['lat'], job['geo_location']['lng']),
      title: job.title
    };

    this.map.addMarker(markerOptions)
      .then((marker: GoogleMapsMarker) => {
        marker.showInfoWindow();
      });

  }
}
