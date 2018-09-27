import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Juego1Page } from '../pages/juego1/juego1';

import { PuntosPage } from '../pages/puntos/puntos';

import { CardLockedComponent } from '../components/card-locked/card-locked';
import { CardPreguntaComponent } from '../components/card-pregunta/card-pregunta';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TiemposProvider } from '../providers/tiempos/tiempos';
import { VerificaProvider } from '../providers/verifica/verifica';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Juego1Page,
    PuntosPage,
    CardLockedComponent,
    CardPreguntaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Juego1Page,
    PuntosPage,
    CardLockedComponent,
    CardPreguntaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TiemposProvider,
    VerificaProvider
  ]
})
export class AppModule {}
