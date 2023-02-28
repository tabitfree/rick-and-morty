# ZooBook Frontend App

Hybrid app based on React and Ionic frameworks.

## Instalation

### Ionic CLI

It's recommended to have Ionic CLI installed globally in order to make hybrid builds etc.

```bash
$ yarn global -g @ionic/cli
```

### Set yarn as default package manger for Ionic

```bash
$ ionic config set -g npmClient yarn
```

### Requirements

Node version >=16.0.0 in order to run tests

## Developing in web browser

```bash
$ yarn start
```

## Previewing and development on real devices

## iOS 🍏

Prerequisities: AppleId, latest Xcode

NOTE: you can skip the `Project Setup​` part and all the `Cordova` steps as this project is using `Capacitor`

https://ionicframework.com/docs/developing/ios

### Installing cocoapods

_CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects._

If you dont have cocoapods installed on your computer follow [this guide](https://cocoapods.org/)

Before running the app for the first time (and after adding other dependencies) pods has to be installed

Enter `ios/App` and run follwing

```bash
$ pod install
```

Then you should be able to run the built app in xcode simulator or an iOS device, make sure [you have developer mode allowed](https://nerdschalk.com/ios-16-how-to-enable-developer-mode-on-iphone-using-the-settings-app/) on your iphone.

Once installed on device you have to also [check trust to your developer account](https://osxdaily.com/2021/05/07/how-to-trust-an-app-on-iphone-ipad-to-fix-untrusted-developer-message/).

### iOS 🍏 development with hot reload

Now you can run the app in dev mode with hot reload. By running

```bash
$ yarn start:ios
```

With each meaningful change, Ionic apps must be built into web assets before the change can appear on iOS simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command.

```bash
$ yarn prepare:ios
```

## Android 🤖

Preparing your environment app for Android is a little bit more complicated so please follow [this guide](https://ionicframework.com/docs/developing/android#installing-android-studio)

NOTE: you can skip the `Project Setup​` part and all the `Cordova` steps as this project is using `Capacitor`

With each meaningful change, Ionic apps must be built into web assets before the change can appear on Android simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command.

```bash
$ yarn prepare:android
```

### Android 🤖 development with hot reload

```bash
$ yarn start:android
```

## Electron ⚛

### Electron ⚛ preview built app

```bash
$ yarn build
$ yarn prepare:electron
$ yarn serve:electron:build
```

### Electron ⚛ development with live reload

Run two terminal tabs or windows

1st tab:

```bash
$  yarn:start
```

2nd tab:

```bash
$  yarn:start:electron
```

## Localization

Localizations are being loaded from json files inside `src/localizations` and injected using `react-intl`

### Updating localization files

We are using [lokse](https://github.com/AckeeCZ/lokse) package in order to get the latest translations from a google spreadsheet.

Spreadsheets API requires a Service Account. More about [authentication here](https://github.com/AckeeCZ/lokse/blob/master/docs/web/src/pages/en/authentication.md). Should you struggle with auth ask FE team lead to provide `.env.local` for you.

Once auth is setup you can just run

```bash
$ yarn localize
```
