import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";

@Injectable()
export class NotasService {
    constructor(public afDB: AngularFireDatabase) {

    }
    notas = [];
    /**
     * getNotas
     */
    public getNotas() {
        //return this.notas;
        return this.afDB.list('notas/').valueChanges();
    }

    /**
     * getNote
     */
    public getNote(id) {
        //return this.notas.filter(function(e, i){ return e.id == id})[0] || {id:null, title:null, description:null};
        return this.afDB.object('notas/'+id).valueChanges();
    }

    /**
     * createNote
     */
    public createNote(note) {
        this.afDB.database.ref('notas/'+note.id).set(note);
        //this.notas.push(note);
    }

     /**
     * editarNote
     */
    public editarNote(note) {
        for(let i; i < this.notas.length; i++){
            if (this.notas[i].id == note.id) {
                this.notas[i] = note;
            }
        }
    }
}