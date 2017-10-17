import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Importamos Modelo User
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async registro(user: User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

}
