/// <reference path="../typings/tsd.d.ts" />

import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {GetFirebaseData} from './services/GetFireBaseData';

import {ListPage} from './pages/list/list';
// import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';


@App({
  templateUrl: 'build/app.html',
  providers:[GetFirebaseData],
  // providers : [FIREBASE_PROVIDERS, defaultFirebase('https://chatapplication10.firebaseio.com/')],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  
  myFirebaseRef;
  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController
  ) {
    
    this.initializeApp();
    
    
   
    

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
