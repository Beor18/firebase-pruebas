import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
import { NotasService } from "../../services/notas.service";
import { DetallesPage } from "../detalles/detalles";
import { LoginPage } from "../login/login";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  //public options;
  //public headers: Headers;
  //posts:any;

  //Declaramos variable notas
  notas: {};
  @ViewChild('') nav:NavController;
  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider, public notasService : NotasService) {
      /*this.http.get("http://www.flybynet.org/wp-json/wp/v2/posts", this.options).map((res:Response) => res.json()).subscribe(posts => {
        console.log(posts);
        this.posts = posts;
      });*/
      notasService.getNotas()
        .subscribe(notas => {
          this.notas =  notas;
        });
  }

  public irDetalle(id){
    this.navCtrl.push(DetallesPage, {id:id});
  }

  public crearNota(){
    this.navCtrl.push(DetallesPage, {id:0});
  }

  //Mensaje al entrar
  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bienvenido a App prueba firebase, ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Un mensaje.`,
          duration: 3000
        }).present();
      }
    })
  }

  cerrarSesion(){
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);

    //Firebase rules auth != null
}
}