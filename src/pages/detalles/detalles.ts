import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotasService } from "../../services/notas.service";


@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
  note: any={id: null, title: null, description: null};
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notasService: NotasService ) {
    this.id = navParams.get('id');
    if(this.id == 0){

    }else {
      notasService.getNote(this.id)
      .valueChanges().subscribe(note => {
        this.note = note;
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

  guardarNota(){
    if(this.id != 0){
      this.notasService.editarNote(this.note);
      alert('Nota Editada con exito!');
      
    }else {
      this.note.id = Date.now();
      this.notasService.createNote(this.note);
      alert('Nota Creada con exito!');
      
    }

    this.navCtrl.pop();
  }

}
