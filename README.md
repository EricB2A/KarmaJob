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

Clone the project `git clone https://github.com/EricBroutba/KarmaJob.git`.  
And go inside it with `cd KarmaJob`.  

To install ionic, simply run `sudo npm install -g ionic cordova`.    

Then install the depedencies with `sudo npm install`.  

To **enable the platform**, use the following commands  

`ionic cordova platform add ios` or/and `ionic cordova platform add android`  

And to run it on your device as a **native app**, use  

`ionic cordova run ios`  and/or  `ionic cordova run android`  

You can also use for **testing**  

`ionic cordova build ios` and/or `ionic cordova build android`  
then   
`ionic cordova emulate ios` and/or `ionic cordova emulate android`  

if you don't want the debug mode, use the parameter --release as `ionic cordova build --release android`

You can also have access to the app in your **browser** direcly by using  

`ionic serve`  

If you have any trouble at this point, please refer to the [official documentation](http://ionicframework.com/docs/v1/guide/installation.html)



## Build an APK
Ionic generate an auto-signed APK when we build or run the app.
You can find this **.apk** in _/platforms/android/build/outputs/apk/android.apk_.  
If you plan to build a realease.apk and sign it 'manually', please refer to the [documentation](http://ionicframework.com/docs/v1/guide/publishing.html)


## Validation
Please refer to the [validation](docs/validation.md) documentation.

