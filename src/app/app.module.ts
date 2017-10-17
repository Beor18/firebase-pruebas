import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Importamos modulo y configuracion de FIREBASE
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
//FIN Importamos modulo y configuracion de FIREBASE

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    //HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    //HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
