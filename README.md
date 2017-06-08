# Ionic - KarmaJob

## Installation Guide

*Note : Ionic targets iOS and android devices. However, as there's many version, yours mays not works as well. Please refer to the [Offical Github](https://github.com/ionic-team/ionic) for more informations.*

### Requirements

*Important: All the requirements listed bellow need to be installed only once. You don't need to install it if you have already done some android or ios development.*

* [Node.JS](https://nodejs.org/en/)  

For Android :

* [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (JDK) 8 or Later

* [Android SDK](https://developer.android.com/studio/index.html) 

Please refer to the [Cordova documentation](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html) in case of trouble.  

For iOS : 

* [XCode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

Then run `xcode-select --install`

* The [deploy tools](https://www.npmjs.com/package/ios-deploy) with the command `npm install -g ios-deploy`  



### Ionic installation  

Simply run `sudo npm install -g ionic`.    

To **enable the platform**, use the following commands  

`ionic cordova platform add ios`  

or/and  

`ionic cordova platform add android`  



And for **testing**, use 

`ionic cordova build ios` then `ionic cordova emulate ios`  

and/or  

`ionic cordova build android` then `ionic cordova emulate android`  



If you want to test it as a native app, use  

`ionic cordova run ios`  

and/or  

`ionic cordova run android`  



You can also have access to the app in your browser direcly by using  

`ionic serve`  



If you have any trouble at this point, please refer to the [official documentation](http://ionicframework.com/docs/v1/guide/installation.html)



!!!This documentation has not been fully tested yet.


`npm install @ionic/cloud-angular --save`
