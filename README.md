# Sveltekit Single Page PWA

This is a template for a Unity3D html build game with PWA capabilities

Viewable [here](https://sveltekit-singlepage-pwa.herokuapp.com/)

Builds as a node app in /build

## Features

### PWA client installability/usable features

#### Macos

##### Safari

* Install unsupported --- as per Apple

##### Chrome

* Install button in the address bar on the right side. Just left of the the share button

* Once installed it will be shown in Chrome Apps folder popup, this can be launched from there,  moved to the desktop, 'Applications' folder or anywhere you like

* Splash screen not supported

* To uninstall, run the PWA and click the ellipsis menu on the top right. click 'uninstall SVELTE-SPPWA'

#### Windows

##### Firefox:

* Install unsupported --- as per Mozilla

##### Chrome: 

* Can install from button located in address bar

* Splash screen not supported

* once installed an icon is put on your desktop

* Uninstall: launch app, click ellipsis menu at top, then click uninstall

#### Android

##### Chrome:

* Can install from ellipsis menu. App will be located in app drawer

* Includes splash screen.

* Uninstallable like any other Android app

#### iOS

##### Safari:

* Can install from "Share Button -> 'Add to Home Screen'"

* Splash screen not supported --- as per Apple

* Site will not reroute to app if site visted again --- as per Apple

* Uninstallable like any other iOS app

##### Chrome:

* Install unsupported --- as per Apple

### PWA Checklist

* /src/service-worker.js - allows for the app to store data on phone to be viewed offline and updates pages when reconnecting to the internet

* /src/static/manifest.json - set of required icons(located at /static/icons), names, and base options

* https - this is required in production. hosting a free project on Heroku(http://www.heroku.com) gives you this. For your own domain you will need to be sure to get an SSL certificate

### Styling

#### CSS

* /static/css contains 3 files; colors.css, fonts.css, and svelteSPPWA.css
    * svleteSPPWA.css: locks html, body, and svelte in place
    * colors.css: all the color properties to the project, done in css variables
    * fonts.css: all your fonts

#### __layout.svelte

* pages will take up the whole viewport

#### __error.svelte

* users will be redirected to this page in case of a fatal error

### Components

* /src/components
    * installmessage.svelte
        * renders install message based on user's browser and os

### src/lib
* /stores is browser variables
* /utils contains detectBrowser.js
    * This detects the users browser and os and determins if the install message should display
    * It also detects if the PWA is already running