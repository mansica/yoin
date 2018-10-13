import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-saved-events',
  templateUrl: 'saved-events.html'
})
export class SavedEventsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToEvent(params){
    if (!params) params = {};
    this.navCtrl.push(EventPage);
  }
}
