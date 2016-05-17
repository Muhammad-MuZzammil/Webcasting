import {Page,NavParams,NavController} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';


@Page({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  player;
  GetPrevId;

  constructor(public params: NavParams) {
    this.GetPrevId = this.params.get('PushVideoId');
    this.load()}
   
  load() {
    if (true) {
        setTimeout(()=>{
        this.onYouTubePlayerAPIReady()
      }, 1000)}}


  onYouTubePlayerAPIReady() {   
    this.player = new YT.Player('ytplayer', {
      height: '590',
      width: '365',
      videoId:  this.GetPrevId       
    });
  }
  

}
