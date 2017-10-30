import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { HttpModule } from '@angular/http';
import { NotasService } from "../services/notas.service";

//Cargamos modulos Firebase y archivo config
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule }from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AuthProvider } from '../providers/auth/auth';
import { AccordionComponent } from '../components/accordion/accordion';
import { DetallesPage } from "../pages/detalles/detalles";
//import { HomePage } from "../pages/home/home";

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    AccordionComponent
    //DetallesPage
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetallesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    NotasService
  ]
})
export class AppModule {}