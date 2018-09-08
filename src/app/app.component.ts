import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks} from '@ionic-native/deeplinks';

import { HomePage } from '../pages/home/home';
import { ProdutoPage } from '../pages/produto/produto';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navChild: Nav;
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar, 
    deeplinks: Deeplinks,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      deeplinks.routeWithNavController(this.navChild, {
        'produto/:cod' : ProdutoPage,
      }).subscribe((match)=> {
        console.log('Native Route', match);
      }), (nomatch) => {
        console.log('didnt mache :( test');
      }

    });
  }
}

