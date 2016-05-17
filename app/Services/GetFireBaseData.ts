import {Injectable} from 'angular2/core';

@Injectable()

export class GetFirebaseData{
    myFirebaseRef;
    a;  
    webcast: any[] = [];
    constructor(){
        
    }
    
    GetData(){
      return new Promise ((resolve, reject)=> {
            
     this.myFirebaseRef = new Firebase("https://webcastpanacloud.firebaseio.com/");
     
      this.myFirebaseRef.child("webcasts").on('value', (snapshot) => {
//   console.log('snapshot',snapshot.val());  // Alerts "San Francisco"
//   this.webcast.push(snapshot.val())
        resolve(snapshot.val())
        });

    });
         

    
}
}
  