import {Page ,NavController,NavParams} from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';

// import {AngularFire, FirebaseListObservable} from 'angularfire2';
// import {Observable} from 'rxjs/Observable';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  myFirebaseRef;
  showListcards:any[]=[];
  // show:boolean= false;
  NullprevID;
  // tasks : FirebaseListObservable<any[]>;
  constructor(public nav:NavController,public params: NavParams) {
     this.myFirebaseRef = new Firebase("https://webcastpanacloud.firebaseio.com/");
       

 this.myFirebaseRef.child("webcasts/").on("child_added", (snapshot) => {
  // console.log(snapshot.val());  // Alerts "San Francisco"
  this.showListcards.push(snapshot.val())
// console.log(' 1) snapshot',snapshot.key());
// console.log(' 2) showListcards value',this.showListcards.values);
  
//   if(this.showListcards.length > 0){
//   for(var  i = 0; i < this.showListcards.length; i++)
//     {
// console.log(' 3) showListcards',this.showListcards[i].event.id);
      
//     }
//   }
// console.log(' 3) showList showListcards',this.showListcards[0].event.id);

// console.log(' 3) showListcards',this.showListcards[1].event.id);
// console.log(' 3) showListcards',this.showListcards);
  
// this.showListcards.push(snapshot.val()); 
console.log('saad',this.showListcards)


});
}
  
  // showList(show){
    // this.show=true;
    


        // this.tasks = this.af.list('/Videos');
// console.log('saad')


// this.myFirebaseRef.child("webcasts/" ).on("child_added", (sanpshot) => {
                // this.pages.push({ title: user.key(), component: PrivateChatComponent });
                // console.log('user',sanpshot.val())
                                // console.log('userkey',sanpshot.key())
                // console.log('userName',sanpshot.name())

                //  console.log('myFirebaseRef',this.myFirebaseRef)
            // });
// console.log('saad',this.tasks)
    
  // }
  
  NextPagePlay(showListId){
    console.log('next')
    console.log('showListId',showListId)
    
//   if(this.showListcards.length > 0){
//   for(var  i = 0; i < this.showListcards.length; i++)
//     {
// console.log(' 3) showListcards',this.showListcards[3].event.id);
      
//     }
//   }
// console.log(' 3) NextPagePlay showListcards',this.showListcards[4].event.id);
    
    this.nav.push(ItemDetailsPage, {PushVideoId: showListId})
  }
}
