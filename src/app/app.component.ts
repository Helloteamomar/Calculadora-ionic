import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { PerfilPage } from '../pages/perfil/perfil';
import { RegistroPage } from '../pages/registro/registro';
import { CalculadoraPage } from '../pages/calculadora/calculadora';
import { CalcularPage } from '../pages/calcular/calcular';
import { NoticiasPage } from '../pages/noticias/noticias';
import { VideoPage } from '../pages/video/video';
import { SalirPage } from '../pages/salir/salir';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BienvenidaPage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Calculadora', component: CalculadoraPage, icon: 'calculator'},
      { title: 'Noticias', component: NoticiasPage, icon: "megaphone"},
      { title: 'Perfil', component: PerfilPage, icon: "person"},
      { title: 'Video', component: VideoPage, icon: "logo-youtube"},
      { title: 'Salir', component: BienvenidaPage, icon: "log-out"},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
