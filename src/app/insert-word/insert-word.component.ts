import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-insert-word',
  templateUrl: './insert-word.component.html',
  styleUrls: ['./insert-word.component.css']
})
export class InsertWordComponent implements OnInit {

  constructor(private FirestoreService: FirestoreService) { 
    let wordData: any = {
      word: "Fiesta",
      referencia: "https://firebasestorage.googleapis.com/v0/b/vacachadafadb.appspot.com/o/fiesta.jpg?alt=media&token=5f8caa61-2491-49f0-973e-e7c5a84a284c"
    }
    this.FirestoreService.insertWord(wordData)
  }
  ngOnInit(): void {
  }
}
