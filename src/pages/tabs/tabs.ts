import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { SavedEventsPage } from '../saved-events/saved-events';
import { CreateEventPage } from '../create-event/create-event';
import { MessasgesPage } from '../messasges/messasges';
import { MePage } from '../me/me';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = EventsPage;
  tab2Root: any = SavedEventsPage;
  tab3Root: any = CreateEventPage;
  tab4Root: any = MessasgesPage;
  tab5Root: any = MePage;
  constructor(public navCtrl: NavController) {
  }
  
}
