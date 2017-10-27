import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database/database";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class NotasService {
    constructor(public afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {

    }
    notas = [];
    /**
     * getNotas
     */
    public getNotas() {    
     return this.afDB.list<any>('/notas/').valueChanges();    
    }

    /**
     * getNote
     */
    public getNote(id) {
        //return this.notas.filter(function(e, i){ return e.id == id})[0] || {id:null, title:null, description:null};
        return this.afDB.object('/notas/'+id);
    }

    /**
     * createNote
     */
    public createNote(note) {
        this.afAuth.authState.subscribe(auth => {
        this.afDB.database.ref('/notas/'+note.id).set(note);
        //this.notas.push(note);
    })
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