import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {JobsPage, ObjectValuesPipe } from "../pages/jobs/jobs";
import { JobsProvider } from '../providers/jobs/jobs';
import { HttpModule } from '@angular/http'
import { SettingsPage } from "../pages/settings/settings";
import { IonicStorageModule } from '@ionic/storage';
import { MapPage } from "../pages/map/map";
import { NetworkPage } from "../pages/network/network";
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    JobsPage,
    ObjectValuesPipe,
    SettingsPage,
    MapPage,
    NetworkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    JobsPage,
    SettingsPage,
    MapPage,
    NetworkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JobsProvider,
    Geolocation
  ]
})
export class AppModule {}
