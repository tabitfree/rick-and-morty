![rick and morty](./rick-and-morty-hero.webp)

# Rick and Morty – Frontend Task App

## Description
Hello adventurer! 

You have been summoned here to test your might. We are challenging you to create few screens of the Rick and Morty app.

[Rick and Morty](https://en.wikipedia.org/wiki/Rick_and_Morty) is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.

We want you to create following screens with real API data from the Rick and [Morty API](https://rickandmortyapi.com/documentation)

### List of characters
Display a list of characters. Since there are 600+ characters on the API you cannot fetch all of them at once - you should use some sort of paging. The API is ready for that.

API resources
https://rickandmortyapi.com/documentation/#get-all-characters

### Character detail
Display detail of a single character. 

API resources
https://rickandmortyapi.com/documentation/#get-a-single-character

### The design 
TBD

### Requirements
Implement as much requirements as possible

* The app has to be written in TypeScript
* The app will use graphQL API
* You can use our skeleton (this repository)
* Application should be able to run on every device and every orientation (web browser, no need to bundle Android/iOS app, but if you want it's a huge plus!)
* If you want to add anything extra, just go for it!
* Send us as a link to your git repository with the source code.

## Our stack

Hybrid app based on React and Ionic frameworks.
We are using [react-query](https://tanstack.com/query/latest/docs/react/overview) to make api calls, [fela](https://github.com/robinweser/fela) to handle styling
and [jotai](https://jotai.org/) for state management

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

## Previewing and development on real devices (Optional)

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
