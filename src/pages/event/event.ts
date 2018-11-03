import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';
import { MapPage } from '../map/map';
import AWS from 'aws-sdk';
AWS.config.logger = console
const logger = new Logger('Event');

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  public event:any;
  public yoiners: any  
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    Auth.currentCredentials().then(credentials => {
      this.event = navParams.get('event');
      this.yoiners = ["Kalle", "Nisse", "Åke"]
      logger.debug("Item", this.event)
    })
    .catch(err => logger.debug('get current credentials err', err));

  }
  goToMap(params){
    if (!params) params = {};
    this.navCtrl.push(MapPage);
  }

}
