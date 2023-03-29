import { Injectable } from '@angular/core';

// Firestore Module Imports
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  addNewStudentRecord(record: any) {
    return this.firestore.collection('student_data').add(record);
  }

  addNewBusinessRecord(record: any) {
    return this.firestore.collection('business_data').add(record);
  }

  getStudentValues() {
    return this.firestore.collection('student_data').get();
  }

  getBusinessValues() {
    return this.firestore.collection('business_data').get();
  }
}
