import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  myFirebaseRef;
  showListcards: any[] = [];
  NullprevID;
  
  constructor(public nav: NavController, public params: NavParams) {
    this.myFirebaseRef = new Firebase("https://webcastpanacloud.firebaseio.com/webcasts/");


    this.myFirebaseRef.on("child_added", (snapshot) => {
      this.showListcards.push(snapshot.val())
      // console.log('saad', this.showListcards)
    });
  }


  NextPagePlay(showListId) {
    console.log('showListId', showListId)
    this.nav.push(ItemDetailsPage, { PushVideoId: showListId })
  }
}
