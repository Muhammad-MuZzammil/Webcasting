
import {Page, NavController, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {KeysPipe} from '../../pipes/keyValue';


import {ItemDetailsPage} from '../item-details/item-details';
import {GetFirebaseData} from '../../services/GetFireBaseData';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  pipes: [KeysPipe]
})
export class HelloIonicPage {
  myFirebaseRef;
  getData;

  constructor(public getFBData: GetFirebaseData, public nav: NavController, public params: NavParams) {
    this.getDatatoService();
  }



  getDatatoService() {
    this.getFBData.GetData().then(data => {
      this.getData = data;
    })
  }

  NextPagePlay(key) {
    console.log('showListId', key)
    this.nav.push(ItemDetailsPage, { PushVideoId: key })
  }
}
