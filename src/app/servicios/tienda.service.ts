import { Injectable } from '@angular/core';
import{Auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private auth:Auth) { }

  registrouser({email ,password}:any){
  return createUserWithEmailAndPassword(this.auth,email,password);
  }
  
  loginuser({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }
   logout(){
     return signOut(this.auth);
   }
}
