import {Page,NavParams,NavController} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';


@Page({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  
  liveUrl: string = "";
  player;
  selectedItem: any;
  GetPrevId;
  Nullid;

  constructor(public nav:NavController,public params: NavParams) {
    this.GetPrevId = this.params.get('PushVideoId');
    
    
    console.log(this.GetPrevId)
    this.load();
    
    
  }
   
  
  load() {
    // alert(typeof (YT))
    if (true) {

      var tag = document.createElement('script');
      
    
      
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      // tag.onload= this.onYouTubePlayerAPIReady;
      // this.onYouTubePlayerAPIReady();
      // tag.onload= this.onYouTubePlayerAPIReady;
      setTimeout(()=>{
        this.onYouTubePlayerAPIReady()
      }, 1000)

      // (<any>window).onYouTubePlayerAPIReady = () => {
      //   this.onYouTubePlayerAPIReady();
      // }
    }

    //  else {
    //    this.onYouTubePlayerAPIReady(url);
    //  }

  }


  onYouTubePlayerAPIReady() {
    alert('Welcome to livStream')
    this.player = new YT.Player('ytplayer', {
      height: '490',
      width: '390',
      
      
      // events: {
      //       // autoplay:1
      //       'onReady': this.onPlayerReady
      //     },
      videoId:  this.GetPrevId
    });
    
   

  }
   
  
  
  // onPlayerReady(event) {
  //       event.target.playerapiid = this.GetPrevId;
        
  //     }
  
      BackButton(){
        // this.Nullid = this.onYouTubePlayerAPIReady;
        // this.Nullid=null;
this.nav.pop(HelloIonicPage)
      }
  // liveStream() {
    // this.liveUrl = url.value.substring(url.value.indexOf('=')+1);
    
    
    
    // console.log(this.liveUrl);

  // }



}

//   window.onload = () => {
//     console.log("ONLOAD");
//     var game = new this.ItemDetailsPage();
//     game.mavia()
// };