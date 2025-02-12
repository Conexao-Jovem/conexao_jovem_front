import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  CollectionReference,
  FirestoreDataConverter,
  DocumentData
} from 'firebase/firestore';
import { firebaseConfig } from '../../../app/firebase.config';

const app = initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export abstract class FirestoreCRUDService<T extends Record<string, any>, CREATE> {
  protected db: Firestore;
  protected collectionRef: CollectionReference<T>;

  constructor(collectionName: string) {
    this.db = getFirestore(app);
    this.collectionRef = collection(this.db, collectionName).withConverter(this.firestoreConverter);
  }

  private firestoreConverter: FirestoreDataConverter<T> = {
    toFirestore: (data: T): DocumentData => {
      return { ...data };
    },
    fromFirestore: (snapshot, options): T => {
      return { id: snapshot.id, ...snapshot.data(options) } as unknown as T;
    }
  };

  async findAll(): Promise<T[]> {
    const querySnapshot = await getDocs(this.collectionRef);
    return querySnapshot.docs.map(doc => doc.data());
  }

  async findById(id: string): Promise<T | null> {
    const docSnap = await getDoc(doc(this.collectionRef, id));
    return docSnap.exists() ? docSnap.data() : null;
  }

  async create(data: Partial<CREATE>): Promise<string> {
    const docRef = await addDoc(this.collectionRef, data as T);
    return docRef.id;
  }

  async update(id: string, data: Partial<CREATE>): Promise<void> {
    const docRef = doc(this.db, this.collectionRef.path, id).withConverter(this.firestoreConverter);
    await updateDoc(docRef, data as any);
  }

  async delete(id: string): Promise<void> {
    const docRef = doc(this.db, this.collectionRef.path, id);
    await deleteDoc(docRef);
  }
}
