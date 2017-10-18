import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public options;
  public headers: Headers;
  posts:any;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider, public http:Http) {
      /*this.http.get("http://www.flybynet.org/wp-json/wp/v2/posts", this.options).map((res:Response) => res.json()).subscribe(posts => {
        console.log(posts);
        this.posts = posts;
      });*/
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
}
}