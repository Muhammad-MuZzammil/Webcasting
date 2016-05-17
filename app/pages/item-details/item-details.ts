import {Page,NavParams,NavController} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {OnInit} from 'angular2/core';



@Page({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage implements OnInit {
  
  liveUrl: string = "";

  player;
  GetPrevId;

  constructor(public params: NavParams) {
    this.GetPrevId = this.params.get('PushVideoId');
    // this.load()  
  }
   
  // load() {
  //   if (true) {
        
  //     setTimeout(()=>{
  //     }, 1000)
  //   }
  // }


  onYouTubePlayerAPIReady() {
    this.player = new YT.Player('ytplayer', {
      height: '570',
      width: '390',
      playerVars :{
        'rel' : 0
      },
      
      videoId:  this.GetPrevId
    })
  }
  ngOnInit(){
        this.onYouTubePlayerAPIReady()
  
}
    
}

