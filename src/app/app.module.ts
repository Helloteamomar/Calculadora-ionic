import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { PerfilPage } from '../pages/perfil/perfil';
import { RegistroPage } from '../pages/registro/registro';
import { CalculadoraPage } from '../pages/calculadora/calculadora';
import { CalcularPage } from '../pages/calcular/calcular';
import { EnviarPage } from '../pages/enviar/enviar';
import { NoticiasPage } from '../pages/noticias/noticias';
import { RecuperacionPage } from '../pages/recuperacion/recuperacion';
import { VideoPage } from '../pages/video/video';
import { SalirPage } from '../pages/salir/salir';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { MultiPickerModule } from 'ion-multi-picker';


@NgModule({
  declarations: [
    MyApp,
    BienvenidaPage,
    PerfilPage,
    RegistroPage,
    CalculadoraPage,
    CalcularPage,
    EnviarPage,
    NoticiasPage,
    VideoPage,
    SalirPage,
    RecuperacionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    MultiPickerModule, //Import MultiPickerModule
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BienvenidaPage,
    RegistroPage,
    CalculadoraPage,
    PerfilPage,
    CalcularPage,
    EnviarPage,
    NoticiasPage,
    VideoPage,
    SalirPage,
    RecuperacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
