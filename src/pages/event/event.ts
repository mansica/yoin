import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';
import AWS from 'aws-sdk';
AWS.config.logger = console
const logger = new Logger('Event');

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public item:any;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.item = navParams.get('item');
  }
  
}
