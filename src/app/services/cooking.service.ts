import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CookingDto } from '../dtos/cooking-dto';

@Injectable({
  providedIn: 'root'
})
export class CookingService {

  constructor(public service: AngularFirestore) { }

  addRecipe(dto: CookingDto) {
    return this.service.collection('Recipe').add(JSON.parse(JSON.stringify(dto)));
  }

  getAllRecipes() {
    return this.service.collection('Recipe').get().toPromise();
  }

  deleteRecipe(link: string) {
    return this.service.collection('Recipe', ref => ref.where('link', '==', link)).get().toPromise().then(snapshot => {
      snapshot.docs.forEach(doc => {
        doc.ref.delete();
      });
    });
  }

}
